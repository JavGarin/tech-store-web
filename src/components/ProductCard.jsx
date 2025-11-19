import { memo } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'

const ProductCard = ({ product, addToCart, index }) => {
  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-transparent hover:border-accent"
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-text-main mb-2">{product.name}</h3>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-extrabold text-primary">${product.price}</span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-accent text-primary-dark p-3 rounded-full hover:bg-opacity-90 transform hover:scale-110 transition-all duration-300"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default memo(ProductCard)