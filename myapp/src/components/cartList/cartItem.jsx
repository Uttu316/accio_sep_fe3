import { useContext } from "react";
import { FaMinus as MinusIcon, FaPlus as PlusIcon } from "react-icons/fa";
import { MdDelete as DeleteIcon } from "react-icons/md";
import { CartContext } from "../../contexts/CartContext";
import styles from "./cartList.module.css";

const CartItem = ({ product }) => {
  const {
    id,
    thumbnail,
    quantity,
    title,
    description,
    category,
    stock,
    brand,
    price,
    discountPercentage = 0,
  } = product;

  const { addQuantity, removeFromCart, minusQuantity } =
    useContext(CartContext);

  const unitPrice = price * (1 - discountPercentage / 100);
  const lineTotal = unitPrice * quantity;
  const hasDiscount = discountPercentage > 0;

  const showDelete = quantity === 1;

  return (
    <div className={styles.item}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={thumbnail} alt={title} />
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.badges}>
          <span className={styles.badge}>{category}</span>
          {brand && (
            <span className={`${styles.badge} ${styles.badgeMuted}`}>
              {brand}
            </span>
          )}
        </div>
        <div className={styles.priceLine}>
          <span className={styles.price}>${unitPrice.toFixed(2)}</span>
          {hasDiscount && (
            <>
              <span className={styles.oldPrice}>${price.toFixed(2)}</span>
              <span className={styles.saveTag}>
                {Math.round(discountPercentage)}% off
              </span>
            </>
          )}
        </div>
      </div>

      <div className={styles.right}>
        <span className={styles.lineTotal}>${lineTotal.toFixed(2)}</span>
        <div className={styles.qty}>
          {showDelete ? (
            <button
              className={`${styles.qtyBtn} ${styles.deleteBtn}`}
              onClick={() => removeFromCart(id)}
              aria-label="Remove item"
            >
              <DeleteIcon />
            </button>
          ) : (
            <button
              className={styles.qtyBtn}
              onClick={() => minusQuantity(id)}
              aria-label="Decrease quantity"
            >
              <MinusIcon />
            </button>
          )}
          <span className={styles.qtyValue}>{quantity}</span>
          <button
            className={styles.qtyBtn}
            disabled={stock <= quantity}
            onClick={() => addQuantity(id)}
            aria-label="Increase quantity"
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
