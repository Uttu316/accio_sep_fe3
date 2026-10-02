import { NavLink, Link } from "react-router";
import styles from "./header.module.css";
import logo from "../../assets/react.svg";

import { IoCart as CartIcon } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
const Header = (props) => {
  const { title } = props;

  const { cartSize } = useContext(CartContext);

  return (
    <header className={styles.pageHeader}>
      <h1 className={`${styles.pageTitle} ${styles.text}`}>
        <Link to="/">
          <img src={logo} />
        </Link>
        {title}
      </h1>
      <nav className={styles.pageNavbar}>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/practice"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Practice
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${styles.cartLink} ${isActive ? styles.cartActive : ""}`
          }
        >
          <CartIcon className={styles.cartIcon} />
          <span className={styles.cartBadge}>{cartSize}</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
