import { FiHelpCircle } from "react-icons/fi";
import styles from "./faq.module.css";

const FAQS = [
  {
    q: "How long does delivery take?",
    a: "Most orders arrive within 2-4 business days. Orders over $50 ship free, and you'll get a tracking link by email once dispatched.",
  },
  {
    q: "What is your return policy?",
    a: "You can return most items within 30 days of delivery for a full refund, as long as they're unused and in their original packaging.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "Orders can be changed or cancelled within 1 hour of placing them. After that, reach out here and our team will do their best to help.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "We accept all major credit cards, debit cards, and popular digital wallets. Every payment is secured with 256-bit encryption.",
  },
];

const Faq = () => {
  return (
    <section className={styles.faq}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <p className={styles.sub}>Quick answers to the things people ask most.</p>
      <div className={styles.list}>
        {FAQS.map((item) => (
          <div className={styles.item} key={item.q}>
            <h3 className={styles.question}>
              <span className={styles.qIcon}>
                <FiHelpCircle />
              </span>
              {item.q}
            </h3>
            <p className={styles.answer}>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
