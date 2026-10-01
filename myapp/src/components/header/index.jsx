import { NavLink, Link } from "react-router";
import styles from "./header.module.css";
import logo from "../../assets/react.svg";

const Header = (props) => {
  const { title } = props;

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
      </nav>
    </header>
  );
};

export default Header;
