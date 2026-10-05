import { createContext, useState } from "react";

//step1. create a context
export const CartContext = createContext();

//step2. Create provide to provide values and wrap children

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((curr) => [{ ...product, quantity: 1 }, ...curr]);
  };
  const removeFromCart = (productId) => {
    const remainingItems = cart.filter((i) => i.id !== productId);
    setCart(remainingItems);
  };
  const isInCart = (productId) => {
    return cart.find((i) => i.id === productId);
  };

  const addQuantity = (id) => {
    const allitems = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(allitems);
  };

  const minusQuantity = (id) => {
    const allitems = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(allitems);
  };
  const clearCart = () => {
    setCart([]);
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
        addQuantity,
        minusQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext>
  );
};

export default CartProvider;
