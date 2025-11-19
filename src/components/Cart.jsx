import { useContext } from 'react'
import { X, Trash2, ShoppingCart } from 'lucide-react'
import { CartContext } from '../contexts/CartContext'

const Cart = () => {
  const { cart, removeFromCart, clearCart, isCartOpen, closeCart } = useContext(CartContext)
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-background shadow-2xl transform transition-transform duration-300 z-50 flex flex-col ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-6 border-b border-background-dark">
        <h2 className="text-2xl font-bold text-text-main">Your Cart</h2>
        <button onClick={closeCart} className="text-text-light hover:text-accent transition-colors duration-300">
          <X size={28} />
        </button>
      </div>
      <div className="flex-1 p-6 overflow-y-auto">
        {cart.length === 0 ? (
          <div className="text-center text-text-light h-full flex flex-col justify-center items-center">
            <ShoppingCart size={48} className="mb-4" />
            <p className="text-lg">Your cart is empty.</p>
            <p>Looks like you haven't added anything yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-text-main">{item.name}</h3>
                  <p className="text-text-light text-sm">
                    ${item.price} x {item.quantity}
                  </p>
                  <p className="font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-secondary hover:text-red-500 transition-colors duration-300 p-2"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="p-6 border-t border-background-dark">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-text-main">Subtotal</span>
            <span className="text-2xl font-extrabold text-primary">${total}</span>
          </div>
          <button
            className="w-full bg-accent text-primary-dark py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={clearCart}
            className="w-full text-text-light py-2 mt-2 hover:text-red-500 transition-colors duration-300"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart