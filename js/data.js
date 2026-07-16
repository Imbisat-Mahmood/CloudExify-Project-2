// ========================================
// KADET - Premium Streetwear Catalog
// Brand: KADET | Streetwear Since 2026
// Targeting: Ages 10-18
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
// PRODUCTS (34 Products Total)
// 12 Tops + 11 Sets + 11 Bottoms = 34
// ========================================
const PRODUCTS = [
    // ========================================
    // SIGNATURE TOPS (12 Products) — IDs 1-12
    // ========================================
    { id: 1, name: "White Raglan Cotton T-Shirt", category: "Signature Tops", price: 3100, stock: 12, rating: 4.8, image: "assets/shirt-1.png", description: "Minimal white raglan T-shirt featuring contrasting black sleeves. Crafted from premium breathable cotton for effortless everyday styling.", details: { color: "White / Black", pattern: "Color Block", neck: "Round Neck", sleeves: "Short Raglan Sleeves", fabric: "Premium Cotton", fit: "Relaxed Fit", occasion: "Casual / Streetwear", care: "Machine Wash Cold" } },
    { id: 2, name: "Black Athletic Contrast T-Shirt", category: "Signature Tops", price: 3200, stock: 10, rating: 4.8, image: "assets/shirt-2.png", description: "Modern black athletic T-shirt with clean contrast piping and a premium oversized silhouette.", details: { color: "Black", pattern: "Contrast Piping", neck: "Round Neck", sleeves: "Short Sleeves", fabric: "Premium Cotton Blend", fit: "Relaxed Fit", occasion: "Casual / Sportswear", care: "Machine Wash Cold" } },
    { id: 3, name: "Olive Green Essential Cotton T-Shirt", category: "Signature Tops", price: 2600, stock: 15, rating: 4.8, image: "assets/shirt-3.png", description: "Premium olive green T-shirt with a clean minimalist design. Soft, breathable and perfect for daily wear.", details: { color: "Olive Green", pattern: "Solid", neck: "Round Neck", sleeves: "Short Sleeves", fabric: "Premium Cotton", fit: "Regular Fit", occasion: "Casual / Everyday", care: "Machine Wash Cold" } },
    { id: 4, name: "Maroon Vertical Stripe T-Shirt", category: "Signature Tops", price: 2700, stock: 8, rating: 4.7, image: "assets/shirt-4.png", description: "Premium maroon striped T-shirt with vertical pinstripes and contrasting black sleeve cuffs.", details: { color: "Maroon", pattern: "Vertical Stripes", neck: "Round Neck", sleeves: "Short Sleeves", fabric: "Premium Cotton", fit: "Relaxed Fit", occasion: "Casual / Streetwear", care: "Machine Wash Cold" } },
    { id: 5, name: "Navy Blue Classic Polo Shirt", category: "Signature Tops", price: 2800, stock: 14, rating: 4.9, image: "assets/shirt-5.png", description: "Classic navy blue polo shirt featuring premium cotton pique fabric and a timeless embroidered chest logo.", details: { color: "Navy Blue", pattern: "Solid", neck: "Polo Collar", sleeves: "Short Sleeves", fabric: "Premium Cotton Pique", fit: "Regular Fit", occasion: "Casual / Smart Casual", care: "Machine Wash Cold" } },
    { id: 6, name: "Sage Green Classic Polo Shirt", category: "Signature Tops", price: 2800, stock: 10, rating: 4.8, image: "assets/shirt-6.png", description: "Elegant sage green polo shirt crafted from premium cotton pique with a refined everyday look.", details: { color: "Sage Green", pattern: "Solid", neck: "Polo Collar", sleeves: "Short Sleeves", fabric: "Premium Cotton Pique", fit: "Regular Fit", occasion: "Casual / Smart Casual", care: "Machine Wash Cold" } },
    { id: 7, name: "Sky Blue Ribbed Knit Polo", category: "Signature Tops", price: 3000, stock: 9, rating: 4.9, image: "assets/shirt-7.png", description: "Luxury sky blue ribbed knit polo featuring an open collar and premium stretch knit construction.", details: { color: "Sky Blue", pattern: "Ribbed Knit", neck: "Open Polo Collar", sleeves: "Short Sleeves", fabric: "Premium Knit Cotton", fit: "Slim Fit", occasion: "Smart Casual", care: "Hand Wash" } },
    { id: 8, name: "Beige Ribbed Knit Polo", category: "Signature Tops", price: 3000, stock: 7, rating: 4.9, image: "assets/shirt-8.png", description: "Premium beige ribbed knit polo accented with a contrasting brown collar for an elevated smart casual style.", details: { color: "Beige", pattern: "Ribbed Knit", neck: "Contrast Polo Collar", sleeves: "Short Sleeves", fabric: "Premium Knit Cotton", fit: "Slim Fit", occasion: "Smart Casual / Evening", care: "Hand Wash" } },
    { id: 9, name: "Sky Blue Casual Shirt", category: "Signature Tops", price: 2800, stock: 8, rating: 4.8, image: "assets/shirt-9.png", description: "Premium sky blue casual shirt with subtle micro checks and a breathable cotton construction.", details: { color: "Sky Blue", pattern: "Micro Checks", neck: "Classic Collar", sleeves: "Short Sleeves", fabric: "Premium Cotton", fit: "Regular Fit", occasion: "Casual / Smart Casual", care: "Machine Wash Cold" } },
    { id: 10, name: "Olive Green Striped Resort Shirt", category: "Signature Tops", price: 2950, stock: 6, rating: 4.8, image: "assets/shirt-10.png", description: "Premium olive green striped resort shirt featuring a relaxed camp collar and breathable cotton-linen fabric.", details: { color: "Olive Green", pattern: "Vertical Stripes", neck: "Camp Collar", sleeves: "Short Sleeves", fabric: "Cotton Linen Blend", fit: "Relaxed Fit", occasion: "Resort / Casual", care: "Machine Wash Cold" } },
    { id: 11, name: "Mocha Brown Striped Resort Shirt", category: "Signature Tops", price: 3100, stock: 5, rating: 4.9, image: "assets/shirt-11.png", description: "Premium mocha brown resort shirt with elegant white pinstripes and a modern relaxed silhouette.", details: { color: "Mocha Brown", pattern: "Vertical Pinstripes", neck: "Camp Collar", sleeves: "Short Sleeves", fabric: "Cotton Linen Blend", fit: "Relaxed Fit", occasion: "Smart Casual / Resort", care: "Machine Wash Cold" } },
    { id: 12, name: "Black Textured Knit Resort Shirt", category: "Signature Tops", price: 3200, stock: 6, rating: 4.9, image: "assets/shirt-12.png", description: "Premium black textured resort shirt featuring an intricate knit pattern, rolled sleeves and a sophisticated camp collar.", details: { color: "Black", pattern: "Textured Knit", neck: "Camp Collar", sleeves: "Rolled Short Sleeves", fabric: "Premium Cotton Knit", fit: "Relaxed Fit", occasion: "Casual / Smart Casual / Evening", care: "Machine Wash Cold" } },

    // ========================================
    // MATCHING SETS (11 Products) — IDs 13-23
    // ========================================
    { id: 13, name: "Premium Tech Fleece Co-Ord Set", category: "Matching Sets", price: 4600, stock: 8, rating: 4.9, image: "assets/cord-1.png", description: "Premium tech fleece matching set with signature KADET branding. Ultra-soft fabric with a modern streetwear silhouette.", details: { color: "Bottle Green", pattern: "Solid with Logo", fabric: "Tech Fleece", fit: "Relaxed Fit", occasion: "Athleisure / Streetwear", care: "Machine Wash Cold", includes: "Hoodie + Joggers" } },
    { id: 14, name: "Oversized Knit Co-Ord Set", category: "Matching Sets", price: 4500, stock: 6, rating: 4.7, image: "assets/cord-2.png", description: "Oversized knit matching set with a relaxed silhouette. Premium cotton blend for ultimate comfort and style.", details: { color: "Black", pattern: "Knit Texture", fabric: "Cotton Blend", fit: "Oversized Fit", occasion: "Casual / Streetwear", care: "Machine Wash", includes: "Sweatshirt + Shorts" } },
    { id: 15, name: "Urban Track Co-Ord Set", category: "Matching Sets", price: 4600, stock: 7, rating: 4.6, image: "assets/cord-3.png", description: "Classic urban track set with contrast stripe detailing. Premium sportswear for the modern trendsetter.", details: { color: "White", pattern: "Stripe Detail", fabric: "Polyester-Cotton Blend", fit: "Slim Fit", occasion: "Sportswear / Streetwear", care: "Machine Wash", includes: "Track Top + Track Pants" } },
    { id: 16, name: "Textured Sleeveless Co-Ord Set", category: "Matching Sets", price: 4200, stock: 5, rating: 4.5, image: "assets/cord-4.png", description: "Premium textured sleeveless co-ord set crafted from soft breathable cotton. Designed for all-day comfort with a modern minimal aesthetic.", details: { color: "Navy/White", pattern: "Textured Solid", fabric: "Premium Cotton Blend", fit: "Regular Fit", occasion: "Casual / Summer Wear", care: "Machine Wash", includes: "Sleeveless Tee + Shorts" } },
    { id: 17, name: "Ribbed Summer Co-Ord Set", category: "Matching Sets", price: 4300, stock: 4, rating: 4.4, image: "assets/cord-5.png", description: "Minimal ribbed sleeveless co-ord featuring a soft cream top and classic black shorts. Lightweight, breathable, and designed for effortless everyday style.", details: { color: "Light Grey", pattern: "Ribbed Solid", fabric: "Premium Ribbed Cotton", fit: "Regular Fit", occasion: "Casual / Daily Wear", care: "Machine Wash", includes: "Sleeveless Tee + Shorts" } },
    { id: 18, name: "Earth Tone Co-Ord Set", category: "Matching Sets", price: 4800, stock: 9, rating: 4.3, image: "assets/cord-6.png", description: "Modern earth-tone matching set featuring a rich brown oversized tee paired with off-white shorts.", details: { color: "Cream & Black", pattern: "Solid", fabric: "Premium Cotton", fit: "Oversized Fit", occasion: "Casual / Streetwear", care: "Machine Wash", includes: "Tee + Shorts" } },
    { id: 19, name: "Forest Green Essential Co-Ord Set", category: "Matching Sets", price: 4600, stock: 10, rating: 4.2, image: "assets/cord-7.png", description: "Classic forest green co-ord crafted from soft cotton fabric. A clean and versatile outfit designed for maximum comfort.", details: { color: "Brown & Off White", pattern: "Solid", fabric: "Soft Cotton", fit: "Regular Fit", occasion: "Daily Wear / Casual", care: "Machine Wash", includes: "Tee + Shorts" } },
    { id: 20, name: "Linen Blend Resort Co-Ord Set", category: "Matching Sets", price: 4200, stock: 12, rating: 4.4, image: "assets/cord-8.png", description: "Lightweight textured shirt and shorts co-ord inspired by resort fashion. Breathable linen-blend fabric delivers exceptional comfort.", details: { color: "Forest Green", pattern: "Textured", fabric: "Cotton Linen Blend", fit: "Relaxed Fit", occasion: "Summer / Resort Wear", care: "Machine Wash", includes: "Shirt + Shorts" } },
    { id: 21, name: "Butter Yellow Resort Co-Ord Set", category: "Matching Sets", price: 4800, stock: 8, rating: 4.5, image: "assets/cord-9.png", description: "Fresh butter yellow resort co-ord featuring a textured short-sleeve shirt and matching shorts.", details: { color: "Offwhite and Cream", pattern: "Textured", fabric: "Cotton Linen Blend", fit: "Relaxed Fit", occasion: "Resort / Summer Wear", care: "Machine Wash", includes: "Shirt + Shorts" } },
    { id: 22, name: "Classic Polo Co-Ord Set", category: "Matching Sets", price: 4700, stock: 7, rating: 4.4, image: "assets/cord-10.png", description: "Sophisticated polo-inspired co-ord featuring a textured white polo shirt with navy accents and matching navy shorts.", details: { color: "Butter Yellow", pattern: "Textured", fabric: "Premium Cotton Blend", fit: "Regular Fit", occasion: "Smart Casual / Daily Wear", care: "Machine Wash", includes: "Polo Tee + Shorts" } },
    { id: 23, name: "Textured Sleeveless Co-Ord Set", category: "Matching Sets", price: 4200, stock: 5, rating: 4.5, image: "assets/cord-11.png", description: "Premium textured sleeveless co-ord set crafted from soft breathable cotton. Designed for all-day comfort with a modern minimal aesthetic.", details: { color: "Navy/White", pattern: "Textured Solid", fabric: "Premium Cotton Blend", fit: "Regular Fit", occasion: "Casual / Summer Wear", care: "Machine Wash", includes: "Sleeveless Tee + Shorts" } },
    { id: 24, name: "Oversized Cotton Co-Ord Set", category: "Matching Sets", price: 4600, stock: 6, rating: 4.6, image: "assets/cord-12.png", description: "Premium oversized brown co-ord made from heavyweight cotton for a clean contemporary look. Finished with matching shorts.", details: { color: "Coffee Brown", pattern: "Solid", fabric: "Heavyweight Premium Cotton", fit: "Oversized Fit", occasion: "Casual / Streetwear", care: "Machine Wash", includes: "Oversized Tee + Shorts" } },

    // ========================================
    // ESSENTIAL BOTTOMS (11 Products) — IDs 24-34
    // ========================================
    { id: 25, name: "Light Wash Wide-Leg Jeans", category: "Essential Bottoms", price: 3490, stock: 10, rating: 4.8, image: "assets/bottom-1.png", description: "Premium light wash wide-leg denim jeans crafted from soft heavyweight cotton. A timeless everyday essential.", details: { color: "Light Blue", pattern: "Solid Wash", waist: "Button Closure", length: "Full Length", fabric: "100% Cotton Denim", fit: "Wide Leg", occasion: "Casual / Everyday", care: "Machine Wash" } },
    { id: 26, name: "Classic Indigo Wide Jeans", category: "Essential Bottoms", price: 3690, stock: 12, rating: 4.8, image: "assets/bottom-2.png", description: "Classic indigo denim with a relaxed wide-leg cut. Designed for all-day comfort.", details: { color: "Dark Indigo", pattern: "Solid Wash", waist: "Button Closure", length: "Full Length", fabric: "Premium Cotton Denim", fit: "Wide Leg", occasion: "Casual / Streetwear", care: "Machine Wash" } },
    { id: 27, name: "Vintage Fade Baggy Jeans", category: "Essential Bottoms", price: 3890, stock: 8, rating: 4.9, image: "assets/bottom-3.png", description: "Vintage-inspired faded denim featuring a relaxed baggy fit with subtle whiskering.", details: { color: "Vintage Blue", pattern: "Faded Wash", waist: "Button Closure", length: "Full Length", fabric: "Premium Cotton Denim", fit: "Baggy Fit", occasion: "Streetwear / Casual", care: "Machine Wash" } },
    { id: 28, name: "Black Wide-Leg Denim", category: "Essential Bottoms", price: 3790, stock: 9, rating: 4.8, image: "assets/bottom-4.png", description: "Premium black wide-leg jeans with a washed finish. Clean, versatile, and perfect for minimal everyday styling.", details: { color: "Washed Black", pattern: "Faded Wash", waist: "Button Closure", length: "Full Length", fabric: "100% Cotton Denim", fit: "Wide Leg", occasion: "Casual / Streetwear", care: "Machine Wash" } },
    { id: 29, name: "Beige Cargo Utility Pants", category: "Essential Bottoms", price: 3290, stock: 11, rating: 4.7, image: "assets/bottom-5.png", description: "Relaxed-fit cargo pants featuring spacious utility pockets and a comfortable elastic waistband.", details: { color: "Beige", pattern: "Solid", waist: "Elastic Waist", length: "Full Length", fabric: "Cotton Twill", fit: "Relaxed Fit", occasion: "Casual / Streetwear", care: "Machine Wash" } },
    { id: 30, name: "Charcoal Cargo Utility Pants", category: "Essential Bottoms", price: 3290, stock: 10, rating: 4.7, image: "assets/bottom-6.png", description: "Modern charcoal cargo trousers with utility pockets and a clean relaxed silhouette.", details: { color: "Charcoal Grey", pattern: "Solid", waist: "Elastic Waist", length: "Full Length", fabric: "Premium Cotton Twill", fit: "Relaxed Fit", occasion: "Casual / Utility Wear", care: "Machine Wash" } },
    { id: 31, name: "Brown Cargo Utility Pants", category: "Essential Bottoms", price: 3390, stock: 8, rating: 4.8, image: "assets/bottom-7.png", description: "Earth-tone cargo pants with oversized utility pockets and a relaxed straight-leg fit.", details: { color: "Coffee Brown", pattern: "Solid", waist: "Elastic Waist", length: "Full Length", fabric: "Premium Cotton Twill", fit: "Relaxed Fit", occasion: "Casual / Streetwear", care: "Machine Wash" } },
    { id: 32, name: "Black Cargo Utility Pants", category: "Essential Bottoms", price: 3390, stock: 10, rating: 4.8, image: "assets/bottom-8.png", description: "Premium black cargo trousers with a modern relaxed cut and spacious utility pockets.", details: { color: "Jet Black", pattern: "Solid", waist: "Elastic Waist", length: "Full Length", fabric: "Premium Cotton Twill", fit: "Relaxed Fit", occasion: "Streetwear / Casual", care: "Machine Wash" } },
    { id: 33, name: "Classic Pleated Trousers", category: "Essential Bottoms", price: 3590, stock: 9, rating: 4.9, image: "assets/bottom-9.png", description: "Elegant straight-leg pleated trousers tailored for smart casual and formal styling.", details: { color: "Light Grey", pattern: "Solid", waist: "Button Closure", length: "Full Length", fabric: "Premium Suiting Fabric", fit: "Relaxed Straight Fit", occasion: "Formal / Smart Casual", care: "Dry Clean Recommended" } },
    { id: 34, name: "Navy Pleated Trousers", category: "Essential Bottoms", price: 3590, stock: 8, rating: 4.8, image: "assets/bottom-10.png", description: "Sophisticated navy pleated trousers with a relaxed straight-leg silhouette.", details: { color: "Navy Blue", pattern: "Solid", waist: "Button Closure", length: "Full Length", fabric: "Premium Suiting Fabric", fit: "Relaxed Straight Fit", occasion: "Business Casual / Formal", care: "Dry Clean Recommended" } },
    { id: 35, name: "Sage Green Pleated Trousers", category: "Essential Bottoms", price: 3690, stock: 7, rating: 4.9, image: "assets/bottom-11.png", description: "Premium sage green pleated trousers featuring a modern tailored fit.", details: { color: "Sage Green", pattern: "Solid", waist: "Button Closure", length: "Full Length", fabric: "Premium Suiting Fabric", fit: "Relaxed Straight Fit", occasion: "Smart Casual / Formal", care: "Dry Clean Recommended" } }
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