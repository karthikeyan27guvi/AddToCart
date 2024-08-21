import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addItemToCart = (item) => {
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    updateTotals();
  };

  const removeItemFromCart = (itemId) => {
    const newCart = cart.filter((i) => i.id !== itemId);
    setCart(newCart);
    updateTotals();
  };

  const updateItemQuantity = (itemId, quantity) => {
    const item = cart.find((i) => i.id === itemId);
    if (item) {
      item.quantity = quantity;
      setCart([...cart]);
    }
    updateTotals();
  };

  const updateTotals = () => {
    const newTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const newTotalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalQuantity(newTotalQuantity);
    setTotalAmount(newTotalAmount);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantity,
        totalAmount,
        products,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };