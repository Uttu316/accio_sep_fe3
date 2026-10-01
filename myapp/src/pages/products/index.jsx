import Footer from "../../components/footer";
import Header from "../../components/header";
import Products from "../../components/products";
import styles from "./products.module.css";

const ProductsPage = () => {
  return (
    <div>
      <Header title="Store" />
      <h1 className={styles.heading}>
        Latest <span>Products</span>
      </h1>
      <Products />
      <Footer />
    </div>
  );
};
export default ProductsPage;
