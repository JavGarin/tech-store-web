// Datos mock de productos
export const products = {
  cases: [
    { id: 1, name: "Silicone Case Pro", price: 49.99, image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop" },
    { id: 2, name: "Leather Case Premium", price: 79.99, image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop" },
    { id: 3, name: "Clear Case Ultra", price: 39.99, image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop" },
    { id: 4, name: "Carbon Fiber Case", price: 59.99, image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop" },
  ],
  magsafe: [
    { id: 5, name: "MagSafe Charger", price: 39.99, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop" },
    { id: 6, name: "MagSafe Battery Pack", price: 99.99, image: "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?w=400&h=400&fit=crop" },
    { id: 7, name: "MagSafe Wallet", price: 59.99, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop" },
  ],
  cables: [
    { id: 8, name: "USB-C Cable 2m", price: 19.99, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop" },
    { id: 9, name: "Lightning Cable", price: 24.99, image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop" },
    { id: 10, name: "Braided Cable Pro", price: 29.99, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop" },
  ],
  chargers: [
    { id: 11, name: "Fast Charger 20W", price: 29.99, image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop" },
    { id: 12, name: "Wireless Charger", price: 49.99, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop" },
  ],
  straps: [
    { id: 13, name: "Sport Band", price: 49.99, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop" },
    { id: 14, name: "Leather Loop", price: 99.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" },
  ],
  powerbanks: [
    { id: 15, name: "Power Bank 10000mAh", price: 39.99, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop" },
    { id: 16, name: "Power Bank 20000mAh", price: 59.99, image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop" },
  ]
}

export const categories = [
  { name: "Cases", count: 51, icon: "📱", color: "bg-primary/10", products: products.cases },
  { name: "MagSafe", count: 15, icon: "🔋", color: "bg-accent/10", products: products.magsafe },
  { name: "Cables", count: 18, icon: "🔌", color: "bg-background-dark", products: products.cables },
  { name: "Charger", count: 12, icon: "⚡", color: "bg-accent/20", products: products.chargers },
  { name: "Straps", count: 38, icon: "⌚", color: "bg-primary/20", products: products.straps },
  { name: "Power Banks", count: 18, icon: "🔋", color: "bg-secondary text-background", products: products.powerbanks },
]

export const heroSlides = [
  {
    title: "Charge Your Phone Safely!",
    subtitle: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&h=600&fit=crop"
  },
  {
    title: "Premium Accessories",
    subtitle: "Discover our collection of high-quality phone accessories designed for modern lifestyles.",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1200&h=600&fit=crop"
  },
  {
    title: "Fast Wireless Charging",
    subtitle: "Experience the future of charging with our MagSafe compatible products.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1200&h=600&fit=crop"
  }
]