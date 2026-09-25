import { USERS } from "../../data/users";
import UserCard from "../usercard";
import styles from "./userlist.module.css";

const UserList = () => {
  return (
    <div className={styles.userGrid}>
      {USERS.map((item) => (
        <UserCard user={item} key={item.id} />
      ))}
    </div>
  );
};

export default UserList;
