import { Link } from "react-router";
import { FiCheck, FiShoppingBag, FiHome } from "react-icons/fi";
import styles from "./paymentSuccess.module.css";

const PaymentSuccess = ({ orderId, total }) => {
  return (
    <div className={styles.success}>
      <span className={styles.iconWrap}>
        <FiCheck />
      </span>
      <span className={styles.badge}>Payment Successful</span>
      <h2 className={styles.title}>Thank you for your order!</h2>
      <p className={styles.text}>
        Your payment{total ? ` of $${total}` : ""} went through and your order
        is confirmed. A receipt is on its way to your inbox.
      </p>
      <p className={styles.orderId}>Order #{orderId}</p>

      <div className={styles.actions}>
        <Link className={styles.btnPrimary} to="/products">
          <FiShoppingBag />
          Explore Products
        </Link>
        <Link className={styles.btnGhost} to="/">
          <FiHome />
          Back to Home
        </Link>
      </div>
    </div>
  );
};
export default PaymentSuccess;
