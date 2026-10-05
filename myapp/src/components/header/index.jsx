import { NavLink, Link } from "react-router";
import styles from "./header.module.css";
import logo from "../../assets/react.svg";

import { IoCart as CartIcon } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Header = (props) => {
  const { title } = props;

  const { cartSize } = useContext(CartContext);

  const linkClass = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.active : ""}`;

  return (
    <div className={styles.headerShell}>
      <header className={styles.pageHeader}>
        <Link to="/" className={styles.brand}>
          <span className={styles.logoChip}>
            <img src={logo} alt="logo" />
          </span>
          <span className={styles.brandName}>{title || "Clayful"}</span>
        </Link>

        <nav className={styles.pageNavbar}>
          <div className={styles.navPill}>
            <NavLink to="/products" className={linkClass}>
              Shop
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
            <NavLink to="/practice" className={linkClass}>
              Practice
            </NavLink>
          </div>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${styles.cartLink} ${isActive ? styles.cartActive : ""}`
            }
          >
            <CartIcon className={styles.cartIcon} />
            {cartSize > 0 && (
              <span className={styles.cartBadge}>{cartSize}</span>
            )}
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
