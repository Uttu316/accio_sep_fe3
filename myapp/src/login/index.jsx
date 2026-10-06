import { Link, redirect, useNavigate } from "react-router";
import { FiMail, FiLock, FiEye, FiEyeOff, FiAlertCircle } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import PageWrapper from "../components/pageWrapper";
import styles from "./auth.module.css";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [status, setStatus] = useState("");
  const validate = () => {
    const { username, password } = data;
    if (!username || username.length < 4 || !password || password.length < 6)
      return false;
    return true;
  };
  const resetData = () => {
    setData({
      username: "",
      password: "",
    });
  };
  const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  const sendLogin = async () => {
    setStatus("sending");
    try {
      const res = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });
      if (res.status === 200) {
        const user = await res.json();
        saveUser(user);
        navigate("/products", {
          replace: true,
        });
        return;
      }
      throw res;
    } catch (e) {
      console.error(e);
      setError("Invalid credentials");
      resetData();
    } finally {
      setStatus("");
    }
  };
  const onSubmit = () => {
    setError("");
    if (!validate()) {
      setError("Invalid Credentials");
      resetData();
      return;
    }
    sendLogin();
  };

  return (
    <PageWrapper title="Clayful" className={styles.page}>
      <div className={styles.split}>
        <aside
          className={styles.banner}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80)",
          }}
        >
          <div className={styles.bannerOverlay} />
          <div className={styles.bannerContent}>
            <span className={styles.bannerBadge}>Welcome Back</span>
            <h2 className={styles.bannerTitle}>
              Good to see you again at Clayful
            </h2>
            <p className={styles.bannerText}>
              Sign in to track orders, save favorites, and check out faster.
              Your next favorite find is waiting.
            </p>
          </div>
        </aside>

        <section className={styles.formSide}>
          <div className={styles.formBox}>
            <h1 className={styles.formHeading}>
              Sign <span>In</span>
            </h1>
            <p className={styles.formSub}>
              Enter your details to access your account.
            </p>

            <div className={styles.field}>
              <div className={styles.labelRow}>
                <label className={styles.label}>Username</label>
              </div>
              <div className={styles.inputWrap}>
                <FiMail className={styles.inputIcon} />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="your username"
                  value={data.username}
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
              </div>
            </div>

            <div className={styles.field}>
              <div className={styles.labelRow}>
                <label className={styles.label}>Password</label>
                <Link to="#" className={styles.forgot}>
                  Forgot password?
                </Link>
              </div>
              <div className={styles.inputWrap}>
                <FiLock className={styles.inputIcon} />
                <input
                  className={styles.input}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  className={styles.ghostIconBtn}
                >
                  {showPassword && <FiEyeOff />}
                  {!showPassword && <FiEye />}
                </button>
              </div>
            </div>

            <label className={styles.checkRow}>
              <input type="checkbox" />
              Remember me on this device
            </label>
            {error && (
              <div className={styles.error} role="alert">
                <FiAlertCircle className={styles.errorIcon} />
                <span>{error}</span>
              </div>
            )}
            <button
              disabled={status === "sending"}
              onClick={onSubmit}
              type="button"
              className={styles.submit}
            >
              {status === "sending" ? (
                <>
                  <span className={styles.btnSpinner} />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>

            <div className={styles.divider}>or continue with</div>

            <button type="button" className={styles.google}>
              <FcGoogle className={styles.googleIcon} />
              Sign in with Google
            </button>

            <p className={styles.switch}>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Login;
