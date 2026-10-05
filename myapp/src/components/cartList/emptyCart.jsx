import { Link } from "react-router";
import { FiShoppingCart, FiHome, FiShoppingBag } from "react-icons/fi";
import styles from "./emptyCart.module.css";

const EmptyCart = () => {
  return (
    <div className={styles.empty}>
      <span className={styles.iconWrap}>
        <FiShoppingCart />
      </span>
      <h2 className={styles.title}>Your cart is empty</h2>
      <p className={styles.text}>
        Looks like you haven't added anything yet. Explore our collection and
        find something you'll love.
      </p>
      <div className={styles.actions}>
        <Link className={styles.btnPrimary} to="/products">
          <FiShoppingBag />
          Explore Products
        </Link>
        <Link className={styles.btnGhost} to="/">
          <FiHome />
          Go to Home
        </Link>
      </div>
    </div>
  );
};
export default EmptyCart;
