import { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { CartContext } from './contexts/CartContext'

function App() {
  const { itemAdded } = useContext(CartContext)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-text-main">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <Cart />

      <Outlet />

      <Footer />

      {/* Cart Notification */}
      <AnimatePresence>
        {itemAdded && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-accent text-white px-6 py-3 rounded-lg shadow-lg"
          >
            ✓ Product added to cart!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App