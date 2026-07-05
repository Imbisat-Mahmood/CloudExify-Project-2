// ========================================
// KADET - Main JavaScript
// All functionality including Hero Slider
// ========================================

// ---------- DOM References ----------
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const priceLabel = document.getElementById('priceLabel');
const sortFilter = document.getElementById('sortFilter');
const countdownEl = document.getElementById('countdown');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const navCartCount = document.getElementById('navCartCount');
const wishlistItems = document.getElementById('wishlistItems');
const wishlistCount = document.getElementById('wishlistCount');
const checkoutForm = document.getElementById('checkoutForm');
const orderSuccess = document.getElementById('orderSuccess');
const toastNotification = document.getElementById('toastNotification');
const toastMessage = document.getElementById('toastMessage');
const discountCode = document.getElementById('discountCode');
const applyDiscountBtn = document.getElementById('applyDiscount');
const discountMessage = document.getElementById('discountMessage');

// ---------- State ----------
let cart = [];
let wishlist = [];
let discountApplied = 0;
let discountCodeUsed = '';
let selectedQty = 1;
let currentProductId = null;

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, icon = 'fa-check-circle') {
    toastMessage.innerHTML = `<i class="fas ${icon} me-2 text-orange" aria-hidden="true"></i> ${message}`;
    const toast = new bootstrap.Toast(toastNotification, { delay: 2500 });
    toast.show();
}

// ========================================
// CART FUNCTIONS
// ========================================
function getCart() {
    try {
        return JSON.parse(localStorage.getItem('kadet_cart')) || [];
    } catch {
        return [];
    }
}

function saveCart(cartData) {
    localStorage.setItem('kadet_cart', JSON.stringify(cartData));
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || product.stock <= 0) {
        showToast('Sorry, this product is sold out!', 'fa-exclamation-circle');
        return;
    }

    cart = getCart();
    const existing = cart.find(item => item.id === productId);
    
    if (existing) {
        if (product.stock > existing.qty) {
            existing.qty++;
        } else {
            showToast('Not enough stock available!', 'fa-exclamation-circle');
            return;
        }
    } else {
        cart.push({ id: productId, qty: 1, size: 'M' });
    }

    product.stock--;
    
    saveCart(cart);
    renderCart();
    renderProducts(getFilteredProducts());
    updateCartCount();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart();
    renderProducts(getFilteredProducts());
    updateCartCount();
}

function updateQuantity(productId, change) {
    cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    const product = PRODUCTS.find(p => p.id === productId);
    const newQty = item.qty + change;

    if (newQty <= 0) {
        removeFromCart(productId);
        return;
    }

    if (product && product.stock < change) {
        showToast('Not enough stock!', 'fa-exclamation-circle');
        return;
    }

    item.qty = newQty;
    if (product) product.stock -= change;
    
    saveCart(cart);
    renderCart();
    renderProducts(getFilteredProducts());
    updateCartCount();
}

function renderCart() {
    cart = getCart();
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-4">
                <i class="fas fa-shopping-bag fa-3x mb-3" style="color: rgba(0,0,0,0.1);" aria-hidden="true"></i>
                <p class="text-muted">Your cart is empty</p>
            </div>
        `;
        cartTotal.textContent = 'Rs. 0';
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        if (!product) return;
        const itemTotal = product.price * item.qty;
        total += itemTotal;

        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${product.name}</div>
                    <div class="cart-item-size text-muted small">Size: ${item.size || 'N/A'}</div>
                    <div class="cart-item-price">Rs. ${product.price.toLocaleString()}</div>
                </div>
                <div class="cart-item-qty">
                    <button onclick="updateQuantity(${product.id}, -1)" aria-label="Decrease quantity">−</button>
                    <span>${item.qty}</span>
                    <button onclick="updateQuantity(${product.id}, 1)" aria-label="Increase quantity">+</button>
                    <button class="cart-item-remove" onclick="removeFromCart(${product.id})" aria-label="Remove item">
                        <i class="fas fa-trash-alt" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        `;
    });

    cartItems.innerHTML = html;

    if (discountApplied > 0) {
        const discountAmount = (total * discountApplied) / 100;
        total = total - discountAmount;
        cartTotal.innerHTML = `
            <div>
                <span style="text-decoration: line-through; color: #6B7280; font-size: 16px;">
                    Rs. ${(total + discountAmount).toLocaleString()}
                </span>
                <span class="text-success ms-2" style="font-size: 14px;">
                    -${discountApplied}%
                </span>
            </div>
            <span style="color: #10B981;">Rs. ${total.toLocaleString()}</span>
        `;
    } else {
        cartTotal.textContent = `Rs. ${total.toLocaleString()}`;
    }
}

function updateCartCount() {
    cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = count;
    navCartCount.textContent = count;
}

// ========================================
// WISHLIST FUNCTIONS
// ========================================
function getWishlist() {
    try {
        return JSON.parse(localStorage.getItem('kadet_wishlist')) || [];
    } catch {
        return [];
    }
}

function saveWishlist(wishlistData) {
    localStorage.setItem('kadet_wishlist', JSON.stringify(wishlistData));
}

function toggleWishlist(productId) {
    wishlist = getWishlist();
    const index = wishlist.indexOf(productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist', 'fa-heart');
    } else {
        wishlist.push(productId);
        showToast('Added to wishlist! ❤️', 'fa-heart');
    }
    
    saveWishlist(wishlist);
    renderWishlist();
    updateWishlistCount();
    renderProducts(getFilteredProducts());
}

function renderWishlist() {
    wishlist = getWishlist();
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = `
            <div class="wishlist-empty">
                <i class="far fa-heart fa-3x mb-3" aria-hidden="true"></i>
                <p>Your wishlist is empty</p>
                <small>Start adding items you love!</small>
            </div>
        `;
        return;
    }

    let html = '';
    wishlist.forEach(id => {
        const product = PRODUCTS.find(p => p.id === id);
        if (!product) return;
        html += `
            <div class="wishlist-item">
                <span class="wishlist-item-name">${product.name}</span>
                <div>
                    <span class="wishlist-item-price me-3">Rs. ${product.price.toLocaleString()}</span>
                    <button class="btn btn-sm btn-primary" onclick="addToCart(${product.id})" aria-label="Add to cart">
                        <i class="fas fa-shopping-bag" aria-hidden="true"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="toggleWishlist(${product.id})" aria-label="Remove from wishlist">
                        <i class="fas fa-heart" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        `;
    });
    wishlistItems.innerHTML = html;
}

function updateWishlistCount() {
    wishlist = getWishlist();
    wishlistCount.textContent = wishlist.length;
}

// ========================================
// DISCOUNT FUNCTIONS
// ========================================
function applyDiscount() {
    const code = discountCode.value.trim().toUpperCase();
    if (!code) {
        discountMessage.textContent = 'Please enter a discount code';
        discountMessage.className = 'discount-message error';
        return;
    }

    if (DISCOUNT_CODES[code]) {
        discountApplied = DISCOUNT_CODES[code];
        discountCodeUsed = code;
        discountMessage.textContent = `✅ ${discountApplied}% discount applied!`;
        discountMessage.className = 'discount-message success';
        showToast(`${discountApplied}% discount applied!`);
        renderCart();
    } else {
        discountMessage.textContent = '❌ Invalid discount code';
        discountMessage.className = 'discount-message error';
    }
}

// ========================================
// COUNTDOWN TIMER
// ========================================
function startCountdown(targetDate) {
    const timer = setInterval(() => {
        const diff = new Date(targetDate) - new Date();
        if (diff <= 0) {
            countdownEl.textContent = "🔥 DROP LIVE NOW!";
            clearInterval(timer);
            return;
        }
        const days = Math.floor(diff / 86400000);
        const h = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
        const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
        const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
        
        if (days > 0) {
            countdownEl.textContent = `${days}d ${h}:${m}:${s}`;
        } else {
            countdownEl.textContent = `${h}:${m}:${s}`;
        }
    }, 1000);
}

// ========================================
// PRODUCT RENDERING (FIXED - No Duplicate)
// ========================================
function getFilteredProducts() {
    const query = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const maxPrice = Number(priceFilter.value);
    const sort = sortFilter.value;

    let filtered = PRODUCTS.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(query);
        const matchesCategory = category === 'all' || p.category === category;
        const matchesPrice = p.price <= maxPrice;
        return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
}

function renderProducts(products) {
    if (products.length === 0) {
        productGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x mb-3" style="color: rgba(0,0,0,0.1);" aria-hidden="true"></i>
                <h5>No products found</h5>
                <p class="text-muted">Try adjusting your filters</p>
            </div>
        `;
        return;
    }

    wishlist = getWishlist();

    let html = '';
    products.forEach(p => {
        const soldOut = p.stock === 0;
        const lowStock = p.stock <= 3 && !soldOut;
        const isWishlisted = wishlist.includes(p.id);
        const stockText = soldOut ? 'Sold Out' : `Only ${p.stock} left`;

        html += `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="product-card">
                    ${soldOut ? '<div class="sold-out-badge">Sold Out</div>' : ''}
                    <button class="wishlist-btn" onclick="toggleWishlist(${p.id})" aria-label="${isWishlisted ? 'Remove from' : 'Add to'} wishlist">
                        <i class="fa${isWishlisted ? 's' : 'r'} fa-heart ${isWishlisted ? 'active' : ''}" aria-hidden="true"></i>
                    </button>
                    <img src="${p.image}" 
                         class="card-img-top" 
                         alt="${p.name} — KADET Streetwear" 
                         loading="lazy"
                         decoding="async"
                         width="400"
                         height="400"
                         onclick="openProductModal(${p.id})">
                    <div class="card-body">
                        <h6 class="card-title">${p.name}</h6>
                        <div class="card-price">Rs. ${p.price.toLocaleString()}</div>
                        <div class="card-rating">
                            ${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 >= 0.5 ? '★' : ''}
                            <span style="color: #6B7280; font-size: 12px;">(${p.rating})</span>
                        </div>
                        <div class="card-stock ${soldOut ? 'sold-out' : lowStock ? 'low' : ''}">
                            ${soldOut ? '❌ Sold Out' : lowStock ? '⚠️ ' + stockText : '✅ In Stock'}
                        </div>
                        <button class="btn-add-cart" onclick="addToCart(${p.id})" ${soldOut ? 'disabled' : ''} aria-label="Add ${p.name} to cart">
                            ${soldOut ? 'Sold Out' : '<i class="fas fa-shopping-bag me-2" aria-hidden="true"></i> Add to Cart'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    productGrid.innerHTML = html;
}
                   
  

// ========================================
// PRODUCT MODAL
// ========================================
function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    currentProductId = productId;
    selectedQty = 1;

    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalName').textContent = product.name;
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalPrice').textContent = `Rs. ${product.price.toLocaleString()}`;
    document.getElementById('modalDesc').textContent = product.description;
    document.getElementById('modalQty').textContent = '1';
    document.getElementById('modalStockInfo').textContent = `(${product.stock} available)`;

    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    const ratingHtml = '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);
    document.getElementById('modalRating').textContent = ratingHtml;
    document.getElementById('modalRatingValue').textContent = `(${product.rating})`;

    document.getElementById('productSize').value = '';
    updateStockInfo(product);

    let detailsHtml = '';
    if (product.details) {
        Object.entries(product.details).forEach(([key, value]) => {
            const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            detailsHtml += `
                <div class="row mb-2">
                    <div class="col-5 fw-bold" style="color: #6B7280; font-size: 14px;">${label}</div>
                    <div class="col-7" style="font-size: 14px;">${value}</div>
                </div>
            `;
        });
    }
    document.getElementById('modalDetails').innerHTML = detailsHtml;

    const addBtn = document.getElementById('modalAddToCart');
    if (product.stock <= 0) {
        addBtn.disabled = true;
        addBtn.innerHTML = '<i class="fas fa-times me-2" aria-hidden="true"></i> Sold Out';
    } else {
        addBtn.disabled = false;
        addBtn.innerHTML = '<i class="fas fa-shopping-bag me-2" aria-hidden="true"></i> Add to Cart';
    }

    updateSizeChartForProduct(product);

    new bootstrap.Modal(document.getElementById('productModal')).show();
}

function updateStockInfo(product) {
    const stockInfo = document.getElementById('modalStockInfo');
    const available = product.stock - selectedQty;
    if (available < 0) {
        stockInfo.textContent = `(Not enough stock)`;
        stockInfo.style.color = '#EF4444';
        document.getElementById('modalAddToCart').disabled = true;
    } else if (available <= 3 && available > 0) {
        stockInfo.textContent = `(Only ${available} left!)`;
        stockInfo.style.color = '#EF4444';
        document.getElementById('modalAddToCart').disabled = false;
    } else {
        stockInfo.textContent = `(${available} available)`;
        stockInfo.style.color = '';
        document.getElementById('modalAddToCart').disabled = false;
    }
}

// ========================================
// SIZE CHART FUNCTIONS
// ========================================
function updateSizeChartForProduct(product) {
    if (!product) return;
    
    const chartData = getSizeChart(product.category);
    if (!chartData) return;
    
    const sizeSelect = document.getElementById('productSize');
    sizeSelect.innerHTML = '<option value="">Select Size</option>';
    
    chartData.sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size.label;
        let label = size.label;
        if (size.chest) label += ` — Chest: ${size.chest}"`;
        if (size.waist) label += ` | Waist: ${size.waist}"`;
        if (size.height) label += ` | Height: ${size.height}`;
        option.textContent = label;
        sizeSelect.appendChild(option);
    });
}

function openSizeChart() {
    const product = PRODUCTS.find(p => p.id === currentProductId);
    if (!product) return;
    
    const chartData = getSizeChart(product.category);
    if (!chartData) return;
    
    document.getElementById('sizeChartTitle').textContent = chartData.title || 'KADET Size Guide';
    
    let tableHtml = `
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead class="table-dark">
                    <tr><th>Size</th>
    `;
    
    const isTops = product.category.includes("Signature Tops");
    const isSets = product.category.includes("Matching Sets");
    const isBottoms = product.category.includes("Essential Bottoms");
    
    if (isTops || isSets) {
        tableHtml += `<th>Chest (in)</th><th>Waist (in)</th><th>Height</th><th>Age</th>`;
    } else if (isBottoms) {
        tableHtml += `<th>Waist (in)</th><th>Hip (in)</th><th>Inseam (in)</th><th>Height</th><th>Age</th>`;
    }
    tableHtml += `</tr></thead><tbody>`;
    
    chartData.sizes.forEach(size => {
        tableHtml += `<tr><td><strong>${size.label}</strong></td>`;
        
        if (isTops || isSets) {
            tableHtml += `
                <td>${size.chest || '-'}</td>
                <td>${size.waist || '-'}</td>
                <td>${size.height || '-'}</td>
                <td>${size.age || '-'}</td>
            `;
        } else if (isBottoms) {
            tableHtml += `
                <td>${size.waist || '-'}</td>
                <td>${size.hip || '-'}</td>
                <td>${size.inseam || '-'}</td>
                <td>${size.height || '-'}</td>
                <td>${size.age || '-'}</td>
            `;
        }
        tableHtml += `</tr>`;
    });
    
    tableHtml += `</tbody></table></div>`;
    document.getElementById('sizeChartContent').innerHTML = tableHtml;
    
    let guideHtml = '';
    if (chartData.measurement_guide) {
        Object.entries(chartData.measurement_guide).forEach(([key, value]) => {
            const label = key.charAt(0).toUpperCase() + key.slice(1);
            guideHtml += `<div class="mb-1"><strong>${label}:</strong> ${value}</div>`;
        });
    }
    document.getElementById('measurementGuide').innerHTML = guideHtml || '<p class="text-muted">No measurement guide available.</p>';
    
    new bootstrap.Modal(document.getElementById('sizeChartModal')).show();
}

// ========================================
// QUANTITY CONTROLS
// ========================================
document.getElementById('qtyDecrease').addEventListener('click', function() {
    const product = PRODUCTS.find(p => p.id === currentProductId);
    if (!product) return;
    if (selectedQty > 1) {
        selectedQty--;
        document.getElementById('modalQty').textContent = selectedQty;
        updateStockInfo(product);
    }
});

document.getElementById('qtyIncrease').addEventListener('click', function() {
    const product = PRODUCTS.find(p => p.id === currentProductId);
    if (!product) return;
    if (selectedQty < product.stock) {
        selectedQty++;
        document.getElementById('modalQty').textContent = selectedQty;
        updateStockInfo(product);
    } else {
        showToast('Not enough stock available!', 'fa-exclamation-circle');
    }
});

// ========================================
// ADD TO CART FROM MODAL
// ========================================
document.getElementById('modalAddToCart').addEventListener('click', function() {
    const size = document.getElementById('productSize').value;
    if (!size) {
        showToast('Please select a size first!', 'fa-exclamation-circle');
        document.getElementById('productSize').classList.add('is-invalid');
        return;
    }
    document.getElementById('productSize').classList.remove('is-invalid');
    
    const product = PRODUCTS.find(p => p.id === currentProductId);
    if (!product) return;
    if (product.stock < selectedQty) {
        showToast('Not enough stock!', 'fa-exclamation-circle');
        return;
    }
    
    cart = getCart();
    const existing = cart.find(item => item.id === currentProductId && item.size === size);
    
    if (existing) {
        if (product.stock >= existing.qty + selectedQty) {
            existing.qty += selectedQty;
        } else {
            showToast('Not enough stock!', 'fa-exclamation-circle');
            return;
        }
    } else {
        cart.push({ id: currentProductId, qty: selectedQty, size: size });
    }
    
    product.stock -= selectedQty;
    
    saveCart(cart);
    renderCart();
    renderProducts(getFilteredProducts());
    updateCartCount();
    
    bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
    showToast(`${product.name} (${size}) added to cart!`);
});

document.getElementById('productSize').addEventListener('change', function() {
    this.classList.remove('is-invalid');
});

// ========================================
// CHECKOUT
// ========================================
checkoutForm.addEventListener('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!this.checkValidity()) {
        this.classList.add('was-validated');
        return;
    }

    localStorage.removeItem('kadet_cart');
    cart = [];
    renderCart();
    updateCartCount();
    orderSuccess.classList.remove('d-none');
    this.reset();
    this.classList.remove('was-validated');
    discountApplied = 0;
    discountCodeUsed = '';
    discountMessage.textContent = '';
    discountCode.value = '';

    setTimeout(() => {
        orderSuccess.classList.add('d-none');
        bootstrap.Modal.getInstance(document.getElementById('checkoutModal')).hide();
        showToast('🎉 Order placed successfully!');
    }, 3000);
});

// ========================================
// FILTERS
// ========================================
function applyFilters() {
    const filtered = getFilteredProducts();
    renderProducts(filtered);
}

searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);
priceFilter.addEventListener('input', function() {
    priceLabel.textContent = `Rs. ${Number(this.value).toLocaleString()}`;
    applyFilters();
});
sortFilter.addEventListener('change', applyFilters);

// ========================================
// DARK MODE TOGGLE
// ========================================
let darkMode = false;

const savedTheme = localStorage.getItem('kadet_theme');
if (savedTheme === 'dark') {
    darkMode = true;
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    document.getElementById('darkModeToggle').innerHTML = '<i class="fas fa-sun me-1" aria-hidden="true"></i> <span id="darkModeLabel">Light</span>';
}

document.getElementById('darkModeToggle').addEventListener('click', function(e) {
    e.preventDefault();
    darkMode = !darkMode;
    document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
    
    if (darkMode) {
        this.innerHTML = '<i class="fas fa-sun me-1" aria-hidden="true"></i> <span id="darkModeLabel">Light</span>';
    } else {
        this.innerHTML = '<i class="fas fa-moon me-1" aria-hidden="true"></i> <span id="darkModeLabel">Dark</span>';
    }
    
    localStorage.setItem('kadet_theme', darkMode ? 'dark' : 'light');
});

// ========================================
// HOME LINK - Click logo to return to top
// ========================================
document.getElementById('homeLink').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('footerHomeLink').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========================================
// FILTER BY CATEGORY (for banner CTA buttons)
// ========================================
function filterCategory(category) {
    categoryFilter.value = category;
    applyFilters();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ========================================
// CROSS-TAB SYNC
// ========================================
window.addEventListener('storage', function(e) {
    if (e.key === 'kadet_cart') {
        renderCart();
        updateCartCount();
    }
    if (e.key === 'kadet_wishlist') {
        renderWishlist();
        updateWishlistCount();
        renderProducts(getFilteredProducts());
    }
    if (e.key === 'kadet_theme') {
        const theme = e.newValue === 'dark';
        document.documentElement.setAttribute('data-bs-theme', theme ? 'dark' : 'light');
        const toggle = document.getElementById('darkModeToggle');
        if (theme) {
            toggle.innerHTML = '<i class="fas fa-sun me-1" aria-hidden="true"></i> <span id="darkModeLabel">Light</span>';
        } else {
            toggle.innerHTML = '<i class="fas fa-moon me-1" aria-hidden="true"></i> <span id="darkModeLabel">Dark</span>';
        }
    }
});

// ========================================
// APPLY DISCOUNT
// ========================================
applyDiscountBtn.addEventListener('click', applyDiscount);
discountCode.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        applyDiscount();
    }
});

// ========================================
// HERO SLIDER - AUTO SLIDING BANNER
// ========================================
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.hero-slide').length;
let slideInterval = null;
const SLIDE_INTERVAL = 4000;

function goToSlide(index) {
    document.querySelectorAll('.hero-slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    document.querySelectorAll('.slider-dot').forEach(dot => {
        dot.classList.remove('active');
    });
    
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function startAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, SLIDE_INTERVAL);
}

function stopAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

// Slider Controls
document.getElementById('sliderNext').addEventListener('click', function(e) {
    e.stopPropagation();
    stopAutoSlide();
    nextSlide();
    setTimeout(startAutoSlide, 5000);
});

document.getElementById('sliderPrev').addEventListener('click', function(e) {
    e.stopPropagation();
    stopAutoSlide();
    prevSlide();
    setTimeout(startAutoSlide, 5000);
});

// Dot indicators
document.querySelectorAll('.slider-dot').forEach(dot => {
    dot.addEventListener('click', function(e) {
        e.stopPropagation();
        const slideIndex = parseInt(this.getAttribute('data-slide'));
        stopAutoSlide();
        goToSlide(slideIndex);
        setTimeout(startAutoSlide, 5000);
    });
});

// Pause on hover
const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoSlide);
    heroSection.addEventListener('mouseleave', startAutoSlide);
}

function initSlider() {
    goToSlide(0);
    startAutoSlide();
}

// ========================================
// INITIALIZE
// ========================================
function init() {
    cart = getCart();
    renderCart();
    updateCartCount();

    wishlist = getWishlist();
    renderWishlist();
    updateWishlistCount();

    renderProducts(PRODUCTS);
    startCountdown('2026-07-15T18:00:00');
    priceLabel.textContent = `Rs. 5,000`;
    
    initSlider();
}

init();

console.log('✅ KADET initialized successfully!');
console.log('🚀 All features loaded including ALL Bonus Challenges + Hero Slider!');
console.log(`📦 Total Products: ${PRODUCTS.length}`);