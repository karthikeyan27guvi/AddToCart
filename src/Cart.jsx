import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, totalQuantity, totalAmount, products, addItemToCart, updateItemQuantity, removeItemFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <button className="add-to-cart-btn" onClick={() => addItemToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h1>Cart</h1>
      <div className="cart-grid">
        {cart.map((item) => (
          <div key={item.id} className="cart-card">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
            <div className="cart-actions">
              <button className="update-qty-btn" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
              <button className="update-qty-btn" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
              <button className="remove-btn" onClick={() => removeItemFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;

Cart.js
