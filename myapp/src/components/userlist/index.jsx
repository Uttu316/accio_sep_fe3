import { USERS } from "../../data/users";
import UserCard from "../usercard";
import "./userlist.css";
const UserList = () => {
  return (
    <div className="user-grid">
      {USERS.map((item) => (
        <UserCard user={item} key={item.id} />
      ))}
    </div>
  );
};
export default UserList;
