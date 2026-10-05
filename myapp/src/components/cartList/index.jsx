import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./cartItem";
import styles from "./cartList.module.css";

const CartList = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className={styles.list}>
      {cart.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
    </div>
  );
};
export default CartList;
