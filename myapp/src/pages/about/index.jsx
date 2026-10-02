import styles from "./about.module.css";
import PageWrapper from "../../components/pageWrapper";

const STATS = [
  { num: "250K+", label: "Happy Customers" },
  { num: "12K+", label: "Products Listed" },
  { num: "40+", label: "Countries Served" },
  { num: "4.9", label: "Average Rating" },
];

const TEAM = [
  {
    name: "Alex Perry",
    role: "Founder & CEO",
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    name: "Marcus Lee",
    role: "Head of Product",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sofia Nguyen",
    role: "Lead Designer",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David Cohen",
    role: "Engineering Lead",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const AboutPage = () => {
  return (
    <PageWrapper title="Clayful" className={styles.page}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <span className={styles.eyebrow}>Our Story</span>
          <h1 className={styles.heroTitle}>
            Crafting a softer way to <span>shop online</span>
          </h1>
          <p className={styles.heroText}>
            Clayful started with a simple belief: shopping should feel calm,
            delightful, and effortless. We blend thoughtful design with quality
            products to bring you an experience that feels just right.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.story}>
          <div className={styles.storyImageWrap}>
            <img
              className={styles.storyImage}
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Our team at work"
            />
          </div>
          <div>
            <h2 className={styles.storyTitle}>Built around people</h2>
            <p className={styles.storyText}>
              From a small studio to a global marketplace, we've stayed focused
              on what matters most, the people who shop with us. Every decision
              we make starts with your experience in mind.
            </p>
            <p className={styles.storyText}>
              We partner with trusted makers and brands to curate collections
              that are beautiful, durable, and fairly priced. No clutter, no
              noise, just products you'll genuinely love.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div className={styles.statCard} key={s.label}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Meet the team</h2>
        <p className={styles.sectionSub}>
          The people behind your favorite shopping experience.
        </p>
        <div className={styles.team}>
          {TEAM.map((m) => (
            <div className={styles.member} key={m.name}>
              <div className={styles.memberAvatarWrap}>
                <img
                  className={styles.memberAvatar}
                  src={m.avatar}
                  alt={m.name}
                />
              </div>
              <h3 className={styles.memberName}>{m.name}</h3>
              <p className={styles.memberRole}>{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default AboutPage;
