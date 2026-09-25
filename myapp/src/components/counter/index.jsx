import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onAdd = () => setCount((c) => c + 1);
  const onMinus = () => setCount((c) => c - 1);

  return (
    <div className={styles.counter}>
      <h2 className={styles.title}>Counter</h2>
      <span className={styles.value}>{count}</span>
      <div className={styles.actions}>
        <button className={styles.btn} onClick={onAdd}>
          +
        </button>
        <button
          className={`${styles.btn} ${styles.btnMinus}`}
          onClick={onMinus}
        >
          −
        </button>
      </div>
    </div>
  );
};

export default Counter;
