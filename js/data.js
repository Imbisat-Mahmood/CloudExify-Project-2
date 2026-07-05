// ========================================
// KADET - Premium Streetwear Catalog
// Brand: KADET | Streetwear Since 2026
// Targeting: Ages 10-18
// ========================================

// ========================================
// SIZE CHART SYSTEM
// ========================================
const SIZE_CHART = {
    tops: {
        title: "Tops Size Guide",
        sizes: [
            { label: "XS", chest: "32-34", waist: "26-28", height: "4'10\" - 5'2\"", age: "10-12 Years" },
            { label: "S", chest: "35-37", waist: "29-31", height: "5'2\" - 5'6\"", age: "12-14 Years" },
            { label: "M", chest: "38-40", waist: "32-34", height: "5'6\" - 5'10\"", age: "14-16 Years" },
            { label: "L", chest: "41-43", waist: "35-37", height: "5'10\" - 6'1\"", age: "16-18 Years" },
            { label: "XL", chest: "44-46", waist: "38-40", height: "6'1\" - 6'4\"", age: "18+ Years" }
        ],
        measurement_guide: {
            chest: "Measure around the fullest part of your chest",
            waist: "Measure around your natural waistline",
            height: "Measure from top of head to feet"
        }
    },
    sets: {
        title: "Matching Sets Size Guide",
        sizes: [
            { label: "S", chest: "34-36", waist: "28-30", height: "5'0\" - 5'4\"", age: "10-12 Years" },
            { label: "M", chest: "37-39", waist: "31-33", height: "5'4\" - 5'8\"", age: "12-14 Years" },
            { label: "L", chest: "40-42", waist: "34-36", height: "5'8\" - 6'0\"", age: "14-16 Years" },
            { label: "XL", chest: "43-45", waist: "37-39", height: "6'0\" - 6'3\"", age: "16-18 Years" },
            { label: "XXL", chest: "46-48", waist: "40-42", height: "6'3\" - 6'5\"", age: "18+ Years" }
        ],
        measurement_guide: {
            chest: "Measure around the fullest part of your chest",
            waist: "Measure around your natural waistline",
            height: "Measure from top of head to feet",
            hip: "Measure around the fullest part of your hips"
        }
    },
    bottoms: {
        title: "Bottoms Size Guide",
        sizes: [
            { label: "XS", waist: "26-28", hip: "32-34", inseam: "28-29", height: "4'10\" - 5'2\"", age: "10-12 Years" },
            { label: "S", waist: "29-31", hip: "35-37", inseam: "29-30", height: "5'2\" - 5'6\"", age: "12-14 Years" },
            { label: "M", waist: "32-34", hip: "38-40", inseam: "30-31", height: "5'6\" - 5'10\"", age: "14-16 Years" },
            { label: "L", waist: "35-37", hip: "41-43", inseam: "31-32", height: "5'10\" - 6'1\"", age: "16-18 Years" },
            { label: "XL", waist: "38-40", hip: "44-46", inseam: "32-33", height: "6'1\" - 6'4\"", age: "18+ Years" }
        ],
        measurement_guide: {
            waist: "Measure around your natural waistline",
            hip: "Measure around the fullest part of your hips",
            inseam: "Measure from crotch to ankle bone",
            height: "Measure from top of head to feet"
        }
    }
};

function getSizeChart(category) {
    if (category.includes("Signature Tops")) return SIZE_CHART.tops;
    if (category.includes("Matching Sets")) return SIZE_CHART.sets;
    if (category.includes("Essential Bottoms")) return SIZE_CHART.bottoms;
    return SIZE_CHART.tops;
}

// ========================================
// PRODUCTS (39 Products Total)
// 10 Tops + 18 Sets + 11 Bottoms = 39
// ========================================
const PRODUCTS = [
    // ========================================
    // SIGNATURE TOPS (10 Products)
    // ========================================
    {
        id: 1,
        name: "Green Graphic Printed Cotton T-Shirt",
        category: "Signature Tops",
        price: 1100,
        stock: 12,
        rating: 4.5,
        image: "assets/shirt-1.jpeg",
        description: "Add a bold touch to your wardrobe with this stylish green graphic printed T-shirt. Crafted from soft and breathable cotton fabric for all-day comfort.",
        details: { color: "Green", pattern: "Graphic Print", neck: "Round Neck", sleeves: "Half Sleeves", fabric: "Soft Cotton Blend", fit: "Regular Fit", occasion: "Casual / Daily Wear", care: "Machine Wash" }
    },
    {
        id: 2,
        name: "Mehroon Graphic Printed Cotton T-Shirt",
        category: "Signature Tops",
        price: 1100,
        stock: 10,
        rating: 4.6,
        image: "assets/shirt-2.jpeg",
        description: "Make a statement with this vibrant mehroon graphic printed T-shirt. Premium cotton blend with a trendy front print.",
        details: { color: "Mehroon", pattern: "Graphic Print", neck: "Round Neck", sleeves: "Half Sleeves", fabric: "Soft Cotton Blend", fit: "Regular Fit", occasion: "Casual / Daily Wear", care: "Machine Wash" }
    },
    {
        id: 3,
        name: "Sky Blue Casual Check Shirt",
        category: "Signature Tops",
        price: 1400,
        stock: 8,
        rating: 4.4,
        image: "assets/shirt-3.jpeg",
        description: "Classic sky blue checkered shirt for a smart casual look. Perfect for outings and everyday elegance.",
        details: { color: "Sky Blue", pattern: "Checkered", neck: "Button-Down Collar", sleeves: "Full Sleeves", fabric: "Premium Cotton", fit: "Regular Fit", occasion: "Smart Casual / Party Wear", care: "Machine Wash" }
    },
    {
        id: 4,
        name: "Light Pink Checkered Casual Shirt",
        category: "Signature Tops",
        price: 1400,
        stock: 7,
        rating: 4.3,
        image: "assets/shirt-4.jpeg",
        description: "Trendy light pink checkered shirt for a modern, stylish look. Soft cotton fabric with a comfortable regular fit.",
        details: { color: "Light Pink", pattern: "Checkered", neck: "Button-Down Collar", sleeves: "Full Sleeves", fabric: "Premium Cotton", fit: "Regular Fit", occasion: "Smart Casual / Party Wear", care: "Machine Wash" }
    },
    {
        id: 5,
        name: "Navy Blue Classic Polo T-Shirt",
        category: "Signature Tops",
        price: 1200,
        stock: 15,
        rating: 4.7,
        image: "assets/shirt-5.jpeg",
        description: "Classic navy blue polo T-shirt with a timeless design. Perfect for school, casual outings, and weekend wear.",
        details: { color: "Navy Blue", pattern: "Solid", neck: "Polo Collar", sleeves: "Short Sleeves", fabric: "Premium Cotton Pique", fit: "Regular Fit", occasion: "Casual / School Wear", care: "Machine Wash" }
    },
    {
        id: 6,
        name: "Light Grey Classic Polo Shirt",
        category: "Signature Tops",
        price: 1200,
        stock: 11,
        rating: 4.5,
        image: "assets/shirt-6.jpeg",
        description: "Versatile light grey polo shirt that pairs perfectly with jeans, shorts, or trousers. A wardrobe essential.",
        details: { color: "Light Grey", pattern: "Solid", neck: "Polo Collar", sleeves: "Short Sleeves", fabric: "Premium Cotton Pique", fit: "Regular Fit", occasion: "Casual / School Wear", care: "Machine Wash" }
    },
    {
        id: 7,
        name: "Sky Blue Polo T-Shirt",
        category: "Signature Tops",
        price: 1200,
        stock: 9,
        rating: 4.6,
        image: "assets/shirt-7.jpeg",
        description: "Fresh sky blue polo T-shirt with a clean, modern look. Soft and breathable for all-day comfort.",
        details: { color: "Sky Blue", pattern: "Solid", neck: "Polo Collar", sleeves: "Short Sleeves", fabric: "Premium Cotton Pique", fit: "Regular Fit", occasion: "Casual / School Wear", care: "Machine Wash" }
    },
    {
        id: 8,
        name: "Premium Sage Green Polo T-Shirt",
        category: "Signature Tops",
        price: 1200,
        stock: 6,
        rating: 4.8,
        image: "assets/shirt-8.jpeg",
        description: "Premium sage green polo shirt with a sophisticated look. Limited stock available — grab yours now!",
        details: { color: "Sage Green", pattern: "Solid", neck: "Polo Collar", sleeves: "Short Sleeves", fabric: "Premium Cotton Pique", fit: "Regular Fit", occasion: "Casual / School Wear", care: "Machine Wash" }
    },
    {
        id: 9,
        name: "Premium Black Graphic Cotton T-Shirt",
        category: "Signature Tops",
        price: 1300,
        stock: 5,
        rating: 4.7,
        image: "assets/shirt-9.jpeg",
        description: "Premium black graphic T-shirt with a bold design. Streetwear-inspired print for the modern wardrobe.",
        details: { color: "Black", pattern: "Graphic Print", neck: "Round Neck", sleeves: "Short Sleeves", fabric: "Premium Cotton", fit: "Regular Fit", occasion: "Streetwear / Casual", care: "Machine Wash" }
    },
    {
        id: 10,
        name: "Premium White Graphic Cotton T-Shirt",
        category: "Signature Tops",
        price: 1300,
        stock: 4,
        rating: 4.7,
        image: "assets/shirt-10.jpeg",
        description: "Premium white graphic T-shirt with a trendy print. A must-have staple for every wardrobe.",
        details: { color: "White", pattern: "Graphic Print", neck: "Round Neck", sleeves: "Short Sleeves", fabric: "Premium Cotton", fit: "Regular Fit", occasion: "Streetwear / Casual", care: "Machine Wash" }
    },

    // ========================================
    // MATCHING SETS (18 Products - Reusing images)
    // ========================================
    {
        id: 11,
        name: "Premium Tech Fleece Co-Ord Set",
        category: "Matching Sets",
        price: 4900,
        stock: 8,
        rating: 4.9,
        image: "assets/cord-1.png",
        description: "Premium tech fleece matching set with signature KADET branding. Ultra-soft fabric with a modern streetwear silhouette.",
        details: { color: "Black/Orange", pattern: "Solid with Logo", fabric: "Tech Fleece", fit: "Relaxed Fit", occasion: "Athleisure / Streetwear", care: "Machine Wash Cold", includes: "Hoodie + Joggers" }
    },
    {
        id: 12,
        name: "Oversized Knit Co-Ord Set",
        category: "Matching Sets",
        price: 4500,
        stock: 6,
        rating: 4.7,
        image: "assets/cord-2.png",
        description: "Oversized knit matching set with a relaxed silhouette. Premium cotton blend for ultimate comfort and style.",
        details: { color: "Sage Green", pattern: "Knit Texture", fabric: "Cotton Blend", fit: "Oversized Fit", occasion: "Casual / Streetwear", care: "Machine Wash", includes: "Sweatshirt + Shorts" }
    },
    {
        id: 13,
        name: "Urban Track Co-Ord Set",
        category: "Matching Sets",
        price: 4200,
        stock: 7,
        rating: 4.6,
        image: "assets/cord-3.png",
        description: "Classic urban track set with contrast stripe detailing. Premium sportswear for the modern trendsetter.",
        details: { color: "Navy/White", pattern: "Stripe Detail", fabric: "Polyester-Cotton Blend", fit: "Slim Fit", occasion: "Sportswear / Streetwear", care: "Machine Wash", includes: "Track Top + Track Pants" }
    },
    {
        id: 14,
        name: "Premium Cotton Co-Ord Set",
        category: "Matching Sets",
        price: 3800,
        stock: 5,
        rating: 4.5,
        image: "assets/cord-5.png",
        description: "Premium cotton matching set with a clean, minimal design. Perfect for everyday wear with a touch of luxury.",
        details: { color: "Beige", pattern: "Solid", fabric: "100% Premium Cotton", fit: "Regular Fit", occasion: "Casual / Daily Wear", care: "Machine Wash", includes: "Tee + Shorts" }
    },
    {
        id: 15,
        name: "Streetwear Hoodie Co-Ord Set",
        category: "Matching Sets",
        price: 3600,
        stock: 4,
        rating: 4.4,
        image: "assets/cord-6.png",
        description: "Streetwear-inspired hoodie and jogger set. Relaxed fit with bold graphics for an urban aesthetic.",
        details: { color: "Charcoal", pattern: "Graphic Print", fabric: "Cotton-Polyester Blend", fit: "Relaxed Fit", occasion: "Streetwear / Casual", care: "Machine Wash", includes: "Hoodie + Joggers" }
    },
    {
        id: 16,
        name: "Minimalist Co-Ord Set",
        category: "Matching Sets",
        price: 3200,
        stock: 9,
        rating: 4.3,
        image: "assets/cord-7.png",
        description: "Clean and minimalist matching set for effortless style. Premium fabric with a modern, understated look.",
        details: { color: "Oatmeal", pattern: "Solid", fabric: "Premium Cotton", fit: "Regular Fit", occasion: "Casual / Minimalist", care: "Machine Wash", includes: "Tee + Shorts" }
    },
    {
        id: 17,
        name: "Essential Cotton Co-Ord Set",
        category: "Matching Sets",
        price: 2900,
        stock: 10,
        rating: 4.2,
        image: "assets/cord-8.png",
        description: "Essential cotton matching set. Breathable, comfortable, and versatile — a wardrobe staple.",
        details: { color: "Navy", pattern: "Solid", fabric: "Soft Cotton", fit: "Regular Fit", occasion: "Daily Wear / Casual", care: "Machine Wash", includes: "Tee + Shorts" }
    },
    {
        id: 18,
        name: "Summer Breeze Co-Ord Set",
        category: "Matching Sets",
        price: 2700,
        stock: 12,
        rating: 4.1,
        image: "assets/cord-9.png",
        description: "Lightweight summer matching set. Perfect for warm days with breathable cotton fabric.",
        details: { color: "Sky Blue", pattern: "Solid", fabric: "Lightweight Cotton", fit: "Relaxed Fit", occasion: "Summer / Beach Wear", care: "Machine Wash", includes: "Tank Top + Shorts" }
    },
    {
        id: 19,
        name: "Graphic Print Co-Ord Set",
        category: "Matching Sets",
        price: 2500,
        stock: 8,
        rating: 4.0,
        image: "assets/cord-3.png",
        description: "Bold graphic print matching set. Express your style with this eye-catching streetwear piece.",
        details: { color: "White/Black", pattern: "Graphic Print", fabric: "Premium Cotton", fit: "Regular Fit", occasion: "Streetwear / Casual", care: "Machine Wash", includes: "Tee + Shorts" }
    },

    // ========================================
    // ESSENTIAL BOTTOMS (11 Products)
    // ========================================
    {
        id: 20,
        name: "Classic Cargo Utility Pants",
        category: "Essential Bottoms",
        price: 3200,
        stock: 10,
        rating: 4.6,
        image: "assets/bottom-1.png",
        description: "Classic cargo utility pants with multiple pockets. Perfect for streetwear and everyday casual looks.",
        details: { color: "Olive Green", pattern: "Solid", waist: "Elastic with Drawstring", length: "Full Length", fabric: "Cotton Blend", fit: "Relaxed Fit", occasion: "Streetwear / Casual", care: "Machine Wash" }
    },
    {
        id: 21,
        name: "Slim Fit Denim Jeans",
        category: "Essential Bottoms",
        price: 2800,
        stock: 12,
        rating: 4.7,
        image: "assets/bottom-2.png",
        description: "Classic slim fit denim jeans with slight stretch. Everyday essential for the modern wardrobe.",
        details: { color: "Medium Blue Wash", pattern: "Solid", waist: "Button Fly", length: "Full Length", fabric: "Denim with Stretch", fit: "Slim Fit", occasion: "Casual / Daily Wear", care: "Machine Wash" }
    },
    {
        id: 22,
        name: "Pleated Wide-Leg Trousers",
        category: "Essential Bottoms",
        price: 3500,
        stock: 6,
        rating: 4.4,
        image: "assets/bottom-3.png",
        description: "Wide-leg pleated trousers with belt loops. Elevated streetwear for a sophisticated look.",
        details: { color: "Beige", pattern: "Solid", waist: "Belt Loops", length: "Full Length", fabric: "Premium Blend", fit: "Wide-Leg", occasion: "Smart Casual / Streetwear", care: "Dry Clean Recommended" }
    },
    {
        id: 23,
        name: "Jogger Cargo Pants",
        category: "Essential Bottoms",
        price: 3000,
        stock: 8,
        rating: 4.5,
        image: "assets/bottom-4.png",
        description: "Comfortable jogger cargo pants with elastic cuffs. Streetwear meets comfort.",
        details: { color: "Charcoal", pattern: "Solid", waist: "Elastic with Drawstring", length: "Full Length", fabric: "Cotton Blend", fit: "Jogger Fit", occasion: "Streetwear / Casual", care: "Machine Wash" }
    },
    {
        id: 24,
        name: "Classic Chino Pants",
        category: "Essential Bottoms",
        price: 2600,
        stock: 10,
        rating: 4.3,
        image: "assets/bottom-5.png",
        description: "Classic chino pants for a smart casual look. Versatile and comfortable for any occasion.",
        details: { color: "Navy", pattern: "Solid", waist: "Belt Loops", length: "Full Length", fabric: "Cotton Twill", fit: "Regular Fit", occasion: "Smart Casual", care: "Machine Wash" }
    },
    {
        id: 25,
        name: "Ripped Skinny Jeans",
        category: "Essential Bottoms",
        price: 3000,
        stock: 5,
        rating: 4.2,
        image: "assets/bottom-6.png",
        description: "Trendy ripped skinny jeans with distressed details. Edgy streetwear essential.",
        details: { color: "Light Blue Wash", pattern: "Distressed", waist: "Button Fly", length: "Full Length", fabric: "Denim with Stretch", fit: "Skinny Fit", occasion: "Streetwear / Casual", care: "Machine Wash" }
    },
    {
        id: 26,
        name: "Cargo Jogger Pants",
        category: "Essential Bottoms",
        price: 2800,
        stock: 7,
        rating: 4.4,
        image: "assets/bottom-7.png",
        description: "Cargo jogger pants with multiple pockets. Comfortable and stylish for everyday wear.",
        details: { color: "Black", pattern: "Solid", waist: "Elastic with Drawstring", length: "Full Length", fabric: "Cotton Blend", fit: "Jogger Fit", occasion: "Streetwear / Casual", care: "Machine Wash" }
    },
    {
        id: 27,
        name: "Straight Leg Denim Jeans",
        category: "Essential Bottoms",
        price: 2600,
        stock: 11,
        rating: 4.5,
        image: "assets/bottom-8.png",
        description: "Classic straight leg denim jeans. Timeless style with a perfect fit.",
        details: { color: "Dark Blue Wash", pattern: "Solid", waist: "Button Fly", length: "Full Length", fabric: "Denim", fit: "Straight Fit", occasion: "Casual / Daily Wear", care: "Machine Wash" }
    },
    {
        id: 28,
        name: "Tech Fleece Joggers",
        category: "Essential Bottoms",
        price: 3400,
        stock: 6,
        rating: 4.6,
        image: "assets/bottom-9.png",
        description: "Premium tech fleece joggers for ultimate comfort. Perfect for athleisure and streetwear.",
        details: { color: "Black", pattern: "Solid", waist: "Elastic with Drawstring", length: "Full Length", fabric: "Tech Fleece", fit: "Relaxed Fit", occasion: "Athleisure / Streetwear", care: "Machine Wash Cold" }
    },
    {
        id: 29,
        name: "Pleated Cargo Pants",
        category: "Essential Bottoms",
        price: 3300,
        stock: 5,
        rating: 4.3,
        image: "assets/bottom-10.png",
        description: "Pleated cargo pants with a modern silhouette. Streetwear meets sophistication.",
        details: { color: "Sage Green", pattern: "Solid", waist: "Belt Loops", length: "Full Length", fabric: "Cotton Blend", fit: "Relaxed Fit", occasion: "Streetwear / Smart Casual", care: "Machine Wash" }
    },
    {
        id: 30,
        name: "Essential Denim Shorts",
        category: "Essential Bottoms",
        price: 1800,
        stock: 10,
        rating: 4.1,
        image: "assets/bottom-11.png",
        description: "Essential denim shorts for summer. Versatile and comfortable for warm days.",
        details: { color: "Light Blue Wash", pattern: "Solid", waist: "Button Fly", length: "Short", fabric: "Denim", fit: "Regular Fit", occasion: "Summer / Casual", care: "Machine Wash" }
    }
];

// ========================================
// CATEGORIES
// ========================================
const CATEGORIES = [
    { value: "all", label: "All Products" },
    { value: "Signature Tops", label: "Signature Tops" },
    { value: "Matching Sets", label: "Matching Sets" },
    { value: "Essential Bottoms", label: "Essential Bottoms" }
];

// ========================================
// DISCOUNT CODES
// ========================================
const DISCOUNT_CODES = {
    "KADET10": 10,
    "KADET20": 20,
    "STREET15": 15,
    "DROP25": 25,
    "WELCOME10": 10
};

console.log(`✅ KADET loaded ${PRODUCTS.length} products`);
console.log(`   - Signature Tops: ${PRODUCTS.filter(p => p.category === "Signature Tops").length}`);
console.log(`   - Matching Sets: ${PRODUCTS.filter(p => p.category === "Matching Sets").length}`);
console.log(`   - Essential Bottoms: ${PRODUCTS.filter(p => p.category === "Essential Bottoms").length}`);