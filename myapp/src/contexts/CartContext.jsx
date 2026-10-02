import { createContext, useState } from "react";

//step1. create a context
export const CartContext = createContext();

//step2. Create provide to provide values and wrap children

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((curr) => [product, ...curr]);
  };
  const removeFromCart = (productId) => {
    const remainingItems = cart.filter((i) => i.id !== productId);
    setCart(remainingItems);
  };
  const isInCart = (productId) => {
    return cart.find((i) => i.id === productId);
  };
  const cartSize = cart.length;
  return (
    <CartContext
      value={{
        cart,
        cartSize,
        addToCart,
        isInCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext>
  );
};

export default CartProvider;
