import styles from "./usercard.module.css";

const UserCard = ({ user }) => {
  return (
    <div className={styles.card}>
      <div className={styles.avatarWrap}>
        <img className={styles.avatar} src={user.avatar} alt={user.name} />
      </div>
      <div className={styles.body}>
        <h2 className={styles.name}>{user.name}</h2>
        <span className={styles.profession}>{user.profession}</span>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.label}>Age</span>
            <span className={styles.value}>{user.age}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.label}>Gender</span>
            <span className={styles.value}>{user.gender}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.label}>Country</span>
            <span className={styles.value}>{user.country}</span>
          </div>
        </div>

        <a className={styles.email} href={`mailto:${user.email}`}>
          {user.email}
        </a>
      </div>
      {user.awards
        ? user.awards.map((item) => <li key={item.id}>{item.name}</li>)
        : null}
    </div>
  );
};

export default UserCard;
