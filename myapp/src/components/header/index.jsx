import styles from "./header.module.css";

const Header = (props) => {
  const { title } = props;

  return (
    <header className={styles.pageHeader}>
      <h1 className={`${styles.pageTitle} ${styles.text}`}>{title}</h1>
      <nav className={styles.pageNavbar}>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
};

export default Header;
