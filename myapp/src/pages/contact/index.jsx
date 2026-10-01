import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./contact.module.css";

const INFO = [
  {
    icon: <FiMapPin />,
    label: "Visit Us",
    value: "221B Market Street, San Francisco, CA",
  },
  {
    icon: <FiPhone />,
    label: "Call Us",
    value: "+1 (555) 012-3456",
  },
  {
    icon: <FiMail />,
    label: "Email Us",
    value: "support@clayful.shop",
  },
  {
    icon: <FiClock />,
    label: "Working Hours",
    value: "Mon - Fri, 9:00 AM - 6:00 PM",
  },
];

const ContactPage = () => {
  return (
    <div className={styles.page}>
      <Header title="Clayful" />

      <section className={styles.section}>
        <div className={styles.hero}>
          <span className={styles.eyebrow}>Get in touch</span>
          <h1 className={styles.heroTitle}>
            We'd love to <span>hear from you</span>
          </h1>
          <p className={styles.heroText}>
            Have a question, feedback, or just want to say hello? Reach out and
            our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.layout}>
          <div className={styles.infoList}>
            {INFO.map((item) => (
              <div className={styles.infoCard} key={item.label}>
                <span className={styles.infoIcon}>{item.icon}</span>
                <div>
                  <p className={styles.infoLabel}>{item.label}</p>
                  <p className={styles.infoValue}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.form}>
            <h2 className={styles.formTitle}>Send us a message</h2>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>First Name</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Last Name</label>
                <input className={styles.input} type="text" placeholder="Doe" />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Email</label>
              <input
                className={styles.input}
                type="email"
                placeholder="jane@example.com"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Subject</label>
              <input
                className={styles.input}
                type="text"
                placeholder="How can we help?"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Message</label>
              <textarea
                className={styles.textarea}
                placeholder="Write your message here..."
              />
            </div>
            <button className={styles.submit}>Send Message</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
