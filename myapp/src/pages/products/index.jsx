import Footer from "../../components/footer";
import Header from "../../components/header";
import PageWrapper from "../../components/pageWrapper";
import Products from "../../components/products";
import styles from "./products.module.css";

const ProductsPage = () => {
  return (
    <PageWrapper title="Store">
      <h1 className={styles.heading}>
        Latest <span>Products</span>
      </h1>
      <Products />
    </PageWrapper>
  );
};
export default ProductsPage;
