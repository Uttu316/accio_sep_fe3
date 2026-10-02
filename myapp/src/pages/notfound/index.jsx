import { Link } from "react-router";
import { FiHome, FiShoppingBag } from "react-icons/fi";
import Header from "../../components/header";
import Footer from "../../components/footer";
import notFoundImg from "../../assets/404.svg";
import styles from "./notfound.module.css";
import PageWrapper from "../../components/pageWrapper";

const NotFoundPage = () => {
  return (
    <PageWrapper title="Clayful" className={styles.page}>
      <main className={styles.main}>
        <div className={styles.card}>
          <span className={styles.blobOne} />
          <span className={styles.blobTwo} />

          <div className={styles.content}>
            <div className={styles.imageWrap}>
              <img
                className={styles.image}
                src={notFoundImg}
                alt="Page not found"
              />
            </div>

            <span className={styles.badge}>Error 404</span>
            <h1 className={styles.title}>
              Oops! This page <span>wandered off</span>
            </h1>
            <p className={styles.text}>
              The page you're looking for doesn't exist or may have been moved.
              Let's get you back to the good stuff.
            </p>

            <div className={styles.actions}>
              <Link className={styles.btnPrimary} to="/">
                <FiHome />
                Go to Home
              </Link>
              <Link className={styles.btnGhost} to="/products">
                <FiShoppingBag />
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default NotFoundPage;
