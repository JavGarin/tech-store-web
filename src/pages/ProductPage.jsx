import { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import ProductCard from '../components/ProductCard'
import { categories } from '../data/mockData'

const ProductPage = () => {
  const { addToCart } = useContext(CartContext)
  const { categoryName } = useParams()
  const selectedCategory = categories.find(
    (category) => category.name === categoryName
  )

  return (
    <div className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-main mb-2">
            {selectedCategory.name}
          </h2>
          <Link to="/" className="text-primary hover:text-primary-dark font-semibold">
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedCategory.products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPage