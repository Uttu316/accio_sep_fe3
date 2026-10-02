import { FaStar } from "react-icons/fa";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import styles from "./productItem.module.css";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ProductItem = ({ product }) => {
  const { thumbnail, id, brand, rating, price, title, description, category } =
    product;

  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);

  const onAddCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };
  const onRemoveCart = (e) => {
    e.preventDefault();
    removeFromCart(id);
  };

  const inCart = isInCart(id);
  return (
    <Link to={`/product/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.media}>
          <span className={styles.category}>{category}</span>
          <img className={styles.image} src={thumbnail} alt={title} />
        </div>
        <div className={styles.body}>
          <div className={styles.topRow}>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.rating}>
              <FaStar className={styles.star} />
              {rating.toFixed(1)}
            </span>
          </div>
          <p className={styles.brand}>{brand}</p>
          <p className={styles.desc}>{description}</p>
          <div className={styles.footer}>
            <span className={styles.price}>
              <span className={styles.priceSymbol}>$</span>
              {price}
            </span>
            {!inCart && (
              <button onClick={onAddCart} className={styles.cart}>
                <FiShoppingCart />
                Add
              </button>
            )}
            {inCart && (
              <button
                onClick={onRemoveCart}
                className={`${styles.cart} ${styles.cartRemove}`}
              >
                <FiTrash2 />
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductItem;
