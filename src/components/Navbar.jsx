import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { CartContext } from '../contexts/CartContext'
import { categories } from '../data/mockData'

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const { cart, openCart } = useContext(CartContext)

  return (
    <nav className="bg-background shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden mr-4 text-text-main">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="text-3xl font-bold text-primary">
              Tech<span className="text-accent">Store</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/category/${category.name}`}
                className="text-text-light font-semibold hover:text-accent transition-colors duration-300"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 text-text-main">
            <button className="relative hover:text-accent transition-colors duration-300">
              <Search size={22} />
            </button>
            <button className="relative hover:text-accent transition-colors duration-300">
              <User size={22} />
            </button>
            <button className="relative" onClick={openCart}>
              <ShoppingCart size={22} className="hover:text-accent transition-colors duration-300" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-t border-background-dark"
          >
            <div className="px-4 py-4 space-y-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/category/${category.name}`}
                  className="block py-2 text-lg text-text-light hover:text-accent transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar