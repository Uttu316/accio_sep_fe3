import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import {
  FiChevronRight,
  FiShoppingCart,
  FiZap,
  FiTruck,
  FiShield,
  FiRotateCcw,
  FiBox,
  FiTag,
  FiCheckCircle,
  FiAlertTriangle,
  FiPackage,
  FiStar,
  FiTrash2,
} from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "./product.module.css";
import PageWrapper from "../../components/pageWrapper";
import { CartContext } from "../../contexts/CartContext";

const Stars = ({ rating, className }) => {
  const rounded = Math.round(rating);
  return (
    <span className={className}>
      {[1, 2, 3, 4, 5].map((n) =>
        n <= rounded ? (
          <FaStar key={n} />
        ) : (
          <FaRegStar key={n} className={styles.starMuted} />
        ),
      )}
    </span>
  );
};

const ProductPage = () => {
  const { productId } = useParams();
  const [status, setStatus] = useState("loading");
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const getProduct = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/" + productId);
      if (res.status >= 200 && res.status < 400) {
        const data = await res.json();
        setProduct(data);
        setActiveImage(0);
        setStatus("done");
        return;
      }
      throw res;
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  const isLoading = status === "loading";
  const isDone = status === "done";
  const isError = status === "error";

  const hasProduct = isDone && product !== null;
  const noProduct = isDone && product === null;

  return (
    <PageWrapper title="Clayful" className={styles.page}>
      <div className={styles.wrap}>
        {isLoading && (
          <div className={styles.state}>
            <span className={styles.spinner} />
            <p>Loading your product...</p>
          </div>
        )}

        {isError && (
          <div className={styles.state}>
            <FiAlertTriangle className={styles.stateIcon} />
            <p>Something went wrong while loading this product.</p>
            <Link className={styles.stateBtn} to="/products">
              Back to Products
            </Link>
          </div>
        )}

        {noProduct && (
          <div className={styles.state}>
            <FiPackage className={styles.stateIcon} />
            <p>Product not available.</p>
            <Link className={styles.stateBtn} to="/products">
              Browse Products
            </Link>
          </div>
        )}

        {hasProduct && (
          <ProductDetail
            product={product}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
          />
        )}
      </div>
    </PageWrapper>
  );
};

export default ProductPage;

const ProductDetail = ({ product, activeImage, setActiveImage }) => {
  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);
  const {
    title,
    description,
    category,
    brand,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    weight,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
    availabilityStatus,
    minimumOrderQuantity,
    images,
    thumbnail,
    reviews,
    id,
  } = product;

  const gallery = images && images.length ? images : [thumbnail];
  const current = gallery[activeImage] || thumbnail;

  const hasDiscount = Number(discountPercentage) > 0;
  const oldPrice = hasDiscount
    ? (price / (1 - discountPercentage / 100)).toFixed(2)
    : null;

  const inStock = stock > 0;

  const specs = [
    { icon: <FiTruck />, label: "Shipping", value: shippingInformation },
    { icon: <FiShield />, label: "Warranty", value: warrantyInformation },
    { icon: <FiRotateCcw />, label: "Returns", value: returnPolicy },
    { icon: <FiBox />, label: "Weight", value: `${weight} g` },
  ];

  const inCart = isInCart(id);

  const onAddCart = () => {
    addToCart(product);
  };
  const onRemoveCart = () => {
    removeFromCart(id);
  };

  return (
    <>
      <div className={styles.detail}>
        <div className={styles.gallery}>
          <div className={styles.mainImageWrap}>
            <img className={styles.mainImage} src={current} alt={title} />
          </div>
          {gallery.length > 1 && (
            <div className={styles.thumbs}>
              {gallery.map((img, i) => (
                <button
                  key={img}
                  className={`${styles.thumb} ${
                    i === activeImage ? styles.thumbActive : ""
                  }`}
                  onClick={() => setActiveImage(i)}
                >
                  <img
                    className={styles.thumbImg}
                    src={img}
                    alt={`${title} ${i + 1}`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={styles.info}>
          <div className={styles.topTags}>
            <span className={styles.category}>{category}</span>
            {brand && <span className={styles.brand}>{brand}</span>}
          </div>

          <h1 className={styles.title}>{title}</h1>

          <div className={styles.ratingRow}>
            <Stars rating={rating} className={styles.stars} />
            <span className={styles.ratingText}>
              {rating} · {reviews ? reviews.length : 0} reviews
            </span>
          </div>

          <div className={styles.priceRow}>
            <span className={styles.price}>${price}</span>
            {oldPrice && <span className={styles.oldPrice}>${oldPrice}</span>}
            {hasDiscount && (
              <span className={styles.discount}>
                -{Math.round(discountPercentage)}%
              </span>
            )}
          </div>

          <p className={styles.desc}>{description}</p>

          <div className={styles.specs}>
            {specs.map((s) => (
              <div className={styles.specItem} key={s.label}>
                <span className={styles.specIcon}>{s.icon}</span>
                <span>
                  <span className={styles.specLabel}>{s.label}</span>
                  <span className={styles.specValue}>{s.value}</span>
                </span>
              </div>
            ))}
          </div>

          <span className={styles.stockBadge}>
            <FiCheckCircle />
            {availabilityStatus ||
              (inStock ? "In Stock" : "Out of Stock")} · {stock} left · Min
            order {minimumOrderQuantity}
          </span>

          <div className={styles.ctaRow}>
            {!inCart && (
              <button onClick={onAddCart} className={styles.btnCart}>
                <FiShoppingCart />
                Add to Cart
              </button>
            )}
            {inCart && (
              <button
                onClick={onRemoveCart}
                className={`${styles.btnCart} ${styles.btnRemove}`}
              >
                <FiTrash2 />
                Remove from Cart
              </button>
            )}
            <button className={styles.btnBuy}>
              <FiZap />
              Buy Now
            </button>
          </div>

          {tags && tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((t) => (
                <span className={styles.tag} key={t}>
                  <FiTag style={{ marginRight: 6, verticalAlign: "-2px" }} />
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <Reviews reviews={reviews} />
    </>
  );
};

const Reviews = ({ reviews }) => {
  const list = reviews || [];

  return (
    <section className={styles.reviews}>
      <div className={styles.reviewsHead}>
        <FiStar className={styles.stateIcon} style={{ fontSize: "1.6rem" }} />
        <h2 className={styles.reviewsTitle}>Customer Reviews</h2>
        <span className={styles.reviewsCount}>{list.length}</span>
      </div>

      {list.length === 0 ? (
        <p className={styles.ratingText}>No reviews yet for this product.</p>
      ) : (
        <div className={styles.reviewGrid}>
          {list.map((r, i) => (
            <article
              className={styles.reviewCard}
              key={`${r.reviewerEmail}-${i}`}
            >
              <div className={styles.reviewTop}>
                <span className={styles.reviewAvatar}>
                  {r.reviewerName ? r.reviewerName.charAt(0) : "?"}
                </span>
                <span>
                  <p className={styles.reviewName}>{r.reviewerName}</p>
                  <span className={styles.reviewDate}>
                    {new Date(r.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </span>
              </div>
              <Stars rating={r.rating} className={styles.reviewStars} />
              <p className={styles.reviewComment}>{r.comment}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
