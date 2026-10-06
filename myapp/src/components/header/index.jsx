import { NavLink, Link, useNavigate } from "react-router";
import styles from "./header.module.css";
import logo from "../../assets/react.svg";

import { IoCart as CartIcon } from "react-icons/io5";
import { FiUser, FiLogOut, FiLogIn } from "react-icons/fi";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

const Header = (props) => {
  const { title } = props;

  const { cartSize, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.active : ""}`;

  const isLoggedin = localStorage.getItem("user");

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const onLogout = () => {
    localStorage.removeItem("user");
    setMenuOpen(false);
    navigate("/login");
    clearCart();
  };

  const onLogin = () => {
    setMenuOpen(false);
    navigate("/login");
  };

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

          {isLoggedin && (
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
          )}

          <div className={styles.profile} ref={menuRef}>
            <button
              type="button"
              className={`${styles.profileBtn} ${menuOpen ? styles.profileActive : ""}`}
              onClick={() => setMenuOpen((open) => !open)}
              aria-haspopup="true"
              aria-expanded={menuOpen}
              aria-label="Account menu"
            >
              <FiUser className={styles.profileIcon} />
            </button>

            {menuOpen && (
              <div className={styles.menu} role="menu">
                <div className={styles.menuHeader}>
                  <span className={styles.menuAvatar}>
                    <FiUser />
                  </span>
                  <div className={styles.menuMeta}>
                    <span className={styles.menuName}>
                      {isLoggedin ? "My Account" : "Guest"}
                    </span>
                    <span className={styles.menuSub}>
                      {isLoggedin ? "Signed in" : "Not signed in"}
                    </span>
                  </div>
                </div>

                <div className={styles.menuDivider} />

                {isLoggedin ? (
                  <button
                    type="button"
                    className={`${styles.menuItem} ${styles.menuDanger}`}
                    onClick={onLogout}
                    role="menuitem"
                  >
                    <FiLogOut />
                    Logout
                  </button>
                ) : (
                  <button
                    type="button"
                    className={styles.menuItem}
                    onClick={onLogin}
                    role="menuitem"
                  >
                    <FiLogIn />
                    Login
                  </button>
                )}
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
