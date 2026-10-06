import { Link } from "react-router";
import { FiUser, FiMail, FiLock, FiEye } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import PageWrapper from "../components/pageWrapper";
import styles from "../login/auth.module.css";

const Signup = () => {
  return (
    <PageWrapper title="Clayful" className={styles.page}>
      <div className={styles.split}>
        <aside
          className={styles.banner}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80)",
          }}
        >
          <div className={styles.bannerOverlay} />
          <div className={styles.bannerContent}>
            <span className={styles.bannerBadge}>Join Clayful</span>
            <h2 className={styles.bannerTitle}>
              Create an account and start shopping
            </h2>
            <p className={styles.bannerText}>
              Unlock member-only deals, faster checkout, and a wishlist that
              follows you everywhere. It only takes a minute.
            </p>
          </div>
        </aside>

        <section className={styles.formSide}>
          <div className={styles.formBox}>
            <h1 className={styles.formHeading}>
              Sign <span>Up</span>
            </h1>
            <p className={styles.formSub}>
              Create your free account in just a few steps.
            </p>

            <div className={styles.field}>
              <div className={styles.labelRow}>
                <label className={styles.label}>Full Name</label>
              </div>
              <div className={styles.inputWrap}>
                <FiUser className={styles.inputIcon} />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Jane Doe"
                />
              </div>
            </div>

            <div className={styles.field}>
              <div className={styles.labelRow}>
                <label className={styles.label}>Username</label>
              </div>
              <div className={styles.inputWrap}>
                <FiMail className={styles.inputIcon} />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="choose a username"
                />
              </div>
            </div>

            <div className={styles.field}>
              <div className={styles.labelRow}>
                <label className={styles.label}>Password</label>
              </div>
              <div className={styles.inputWrap}>
                <FiLock className={styles.inputIcon} />
                <input
                  className={styles.input}
                  type="password"
                  placeholder="create a password"
                />
                <button type="button" className={styles.ghostIconBtn}>
                  <FiEye />
                </button>
              </div>
            </div>

            <div className={styles.field}>
              <div className={styles.labelRow}>
                <label className={styles.label}>Confirm Password</label>
              </div>
              <div className={styles.inputWrap}>
                <FiLock className={styles.inputIcon} />
                <input
                  className={styles.input}
                  type="password"
                  placeholder="re-enter password"
                />
              </div>
            </div>

            <label className={styles.checkRow}>
              <input type="checkbox" />I agree to the Terms & Privacy Policy
            </label>

            <button type="button" className={styles.submit}>
              Create Account
            </button>

            <div className={styles.divider}>or continue with</div>

            <button type="button" className={styles.google}>
              <FcGoogle className={styles.googleIcon} />
              Sign up with Google
            </button>

            <p className={styles.switch}>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Signup;
