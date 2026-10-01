import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./productItem.module.css";

const ProductItem = ({ product }) => {
  const { thumbnail, brand, rating, price, title, description, category } =
    product;
  return (
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
          <button className={styles.cart}>
            <FiShoppingCart />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
