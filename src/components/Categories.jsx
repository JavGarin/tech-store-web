import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Categories = ({ categories }) => {
  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-text-main mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <Link to={`/category/${category.name}`} key={category.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="cursor-pointer group text-center"
              >
                <div className="bg-white rounded-full w-32 h-32 mx-auto flex items-center justify-center text-5xl text-primary shadow-md group-hover:shadow-xl group-hover:scale-105 transform transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="mt-6 font-semibold text-text-main text-lg">{category.name}</h3>
                <p className="text-sm text-text-light">{category.count} products</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories