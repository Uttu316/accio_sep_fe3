import { FiTruck, FiRefreshCw, FiShield, FiHeadphones } from "react-icons/fi";
import styles from "./cartPerks.module.css";

const PERKS = [
  {
    icon: <FiTruck />,
    name: "Fast Delivery",
    text: "Free shipping on orders over $50, delivered in 2-4 days.",
  },
  {
    icon: <FiRefreshCw />,
    name: "Easy Returns",
    text: "Not happy? Return any item within 30 days, no questions asked.",
  },
  {
    icon: <FiShield />,
    name: "Secure Payment",
    text: "Your details are protected with bank-grade encryption.",
  },
  {
    icon: <FiHeadphones />,
    name: "24/7 Support",
    text: "Our team is always here to help, day or night.",
  },
];

const CartPerks = () => {
  return (
    <section className={styles.perks}>
      <h2 className={styles.heading}>Shop with confidence</h2>
      <p className={styles.sub}>Every order comes with these perks.</p>
      <div className={styles.grid}>
        {PERKS.map((p) => (
          <div className={styles.card} key={p.name}>
            <span className={styles.icon}>{p.icon}</span>
            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.text}>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CartPerks;
