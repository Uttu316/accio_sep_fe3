import { FiTruck, FiShield, FiRefreshCw, FiHeadphones } from "react-icons/fi";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./home.module.css";
import { useNavigate } from "react-router";

const FEATURES = [
  {
    icon: <FiTruck />,
    name: "Free Shipping",
    text: "Enjoy free delivery on every order above $50, right to your door.",
  },
  {
    icon: <FiShield />,
    name: "Secure Payment",
    text: "Your transactions are protected with bank-grade encryption.",
  },
  {
    icon: <FiRefreshCw />,
    name: "Easy Returns",
    text: "Changed your mind? Return any item within 30 days hassle-free.",
  },
  {
    icon: <FiHeadphones />,
    name: "24/7 Support",
    text: "Our friendly team is always here to help whenever you need us.",
  },
];

const CATEGORIES = [
  {
    name: "Beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
  },
  {
    name: "Fragrances",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80",
  },
  {
    name: "Furniture",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    name: "Groceries",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const onShowNow = () => {
    navigate("/products");
  };
  return (
    <div className={styles.page}>
      <Header title="Clayful" />

      <section className={styles.section}>
        <div className={styles.hero}>
          <div>
            <span className={styles.heroEyebrow}>New Season Collection</span>
            <h1 className={styles.heroTitle}>
              Shop smarter with <span>Clayful</span>
            </h1>
            <p className={styles.heroText}>
              Discover curated products crafted for modern living. Soft on the
              eyes, bold on quality, delivered fast to your doorstep.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.btnPrimary} onClick={onShowNow}>
                Shop Now
              </button>
              <button className={styles.btnGhost}>Explore Deals</button>
            </div>
          </div>
          <div className={styles.heroImageWrap}>
            <img
              className={styles.heroImage}
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
              alt="Featured collection"
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why shop with us</h2>
        <p className={styles.sectionSub}>
          Everything you love about shopping, made effortless.
        </p>
        <div className={styles.features}>
          {FEATURES.map((f) => (
            <div className={styles.featureCard} key={f.name}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <h3 className={styles.featureName}>{f.name}</h3>
              <p className={styles.featureText}>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Shop by category</h2>
        <p className={styles.sectionSub}>
          Browse our most-loved collections handpicked for you.
        </p>
        <div className={styles.catGrid}>
          {CATEGORIES.map((c) => (
            <div className={styles.catCard} key={c.name}>
              <img className={styles.catImage} src={c.image} alt={c.name} />
              <span className={styles.catName}>{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Get 20% off your first order</h2>
        <p className={styles.ctaText}>
          Join the Clayful family and unlock exclusive member-only deals.
        </p>
        <button className={styles.ctaBtn}>Create Account</button>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
