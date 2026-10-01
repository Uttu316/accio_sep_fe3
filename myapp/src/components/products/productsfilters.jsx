import { FaFilter as FilterIcon } from "react-icons/fa";
import styles from "./productsfilters.module.css";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Beauty", value: "beauty" },
  { label: "Fragrances", value: "fragrances" },
  { label: "Furniture", value: "furniture" },
  { label: "Groceries", value: "groceries" },
];

const ProductsFilters = ({ setfilter, filter }) => {
  return (
    <div className={styles.bar}>
      <p className={styles.label}>
        <FilterIcon className={styles.labelIcon} />
        Filter By:
      </p>
      {FILTERS.map((item) => (
        <FilterItem
          key={item.value}
          label={item.label}
          value={item.value}
          onClick={setfilter}
          selected={filter}
        />
      ))}
    </div>
  );
};

const FilterItem = ({ label, value, onClick, selected }) => {
  const isActive = selected === value;
  return (
    <button
      className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );
};
export default ProductsFilters;
