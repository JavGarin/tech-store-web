const Footer = () => {
  return (
    <footer className="bg-primary text-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Tech<span className="text-accent">Store</span></h3>
            <p className="pr-4">Your one-stop shop for the latest and greatest in tech accessories.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Cases & Protection</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Chargers & Cables</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Audio Devices</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Mounts & Holders</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Newsletter</h4>
            <p className="mb-4">Subscribe to get the latest deals and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-l-full text-text-main border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-primary-dark px-6 py-3 rounded-r-full hover:bg-opacity-90 font-bold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary/20 mt-12 pt-8 text-center">
          <p>© 2025 TechStore. A project by Javier Garin. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer