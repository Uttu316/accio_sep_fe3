import ProductItem from "./productItem";
import styles from "./productslist.module.css";

const ProductsList = ({ products, filter }) => {
  const productsToshow =
    filter === "all" ? products : products.filter((i) => i.category === filter);
  return (
    <div className={styles.grid}>
      {productsToshow.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};
export default ProductsList;
