import { useEffect, useState } from "react";
import { FiAlertTriangle, FiPackage } from "react-icons/fi";
import ProductsFilters from "./productsfilters";
import ProductsList from "./productslist";
import styles from "./products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  const [filter, setfilter] = useState("all");

  const getProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      setStatus("done");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";
  const hasProducts = isDone && products.length !== 0;
  const hasNoProducts = isDone && products.length === 0;

  return (
    <div className={styles.wrap}>
      {isLoading && (
        <div className={styles.state}>
          <span className={styles.spinner} />
          <p>Loading products...</p>
        </div>
      )}
      {isError && (
        <div className={styles.state}>
          <FiAlertTriangle className={styles.stateIcon} />
          <p>Something went wrong</p>
        </div>
      )}
      {hasNoProducts && (
        <div className={styles.state}>
          <FiPackage className={styles.stateIcon} />
          <p>No products Available</p>
        </div>
      )}
      {hasProducts && (
        <>
          <ProductsFilters setfilter={setfilter} filter={filter} />
          <ProductsList products={products} filter={filter} />
        </>
      )}
    </div>
  );
};
export default Products;
