import { useContext } from "react";
import { FiLock, FiCreditCard } from "react-icons/fi";
import { CartContext } from "../../contexts/CartContext";
import styles from "./cartSummary.module.css";

const FREE_SHIPPING_THRESHOLD = 50;
const SHIPPING_FEE = 4.99;

const CartSummary = ({ onCheckout }) => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  // Original price before any discount
  const originalTotal = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );

  // Price after each item's discountPercentage, times quantity
  const discountedTotal = cart.reduce((acc, curr) => {
    const unit = curr.price * (1 - (curr.discountPercentage || 0) / 100);
    return acc + unit * curr.quantity;
  }, 0);

  const savings = originalTotal - discountedTotal;
  const freeShipping = discountedTotal >= FREE_SHIPPING_THRESHOLD;
  const shipping = freeShipping ? 0 : SHIPPING_FEE;
  const grandTotal = discountedTotal + shipping;

  return (
    <aside className={styles.summary}>
      <h3 className={styles.title}>Order Summary</h3>

      <div className={styles.row}>
        <span>Items ({totalQuantity})</span>
        <span className={styles.rowValue}>${originalTotal.toFixed(2)}</span>
      </div>

      <div className={styles.row}>
        <span>Discount</span>
        <span className={styles.discountValue}>-${savings.toFixed(2)}</span>
      </div>

      <div className={styles.row}>
        <span>Shipping</span>
        {freeShipping ? (
          <span className={styles.freeTag}>FREE</span>
        ) : (
          <span className={styles.rowValue}>${shipping.toFixed(2)}</span>
        )}
      </div>

      <div className={styles.divider} />

      <div className={styles.totalRow}>
        <span className={styles.totalLabel}>Total</span>
        <span className={styles.totalValue}>${grandTotal.toFixed(2)}</span>
      </div>
      <div className={styles.promo}>
        <input
          className={styles.promoInput}
          type="text"
          placeholder="Promo code"
        />
        <button className={styles.promoBtn}>Apply</button>
      </div>

      <button
        className={styles.payBtn}
        onClick={() => onCheckout(grandTotal.toFixed(2))}
      >
        <FiCreditCard />
        Pay Now
      </button>

      <div className={styles.secure}>
        <FiLock />
        Secure checkout · 256-bit encryption
      </div>
    </aside>
  );
};
export default CartSummary;
