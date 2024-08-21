import React from 'react'
import { CartProvider } from './CartContext'; 
import Cart from './Cart';

function App() {
  return <>
  <CartProvider>
      <Cart />
      
    </CartProvider>
  </>
}

export default App


App.js
