import "./usercard.css";

const UserCard = ({ user }) => {
  return (
    <div className="usercard">
      <div className="usercard__avatar-wrap">
        <img className="usercard__avatar" src={user.avatar} alt={user.name} />
      </div>
      <div className="usercard__body">
        <h2 className="usercard__name">{user.name}</h2>
        <span className="usercard__profession">{user.profession}</span>

        <div className="usercard__meta">
          <div className="usercard__meta-item">
            <span className="usercard__label">Age</span>
            <span className="usercard__value">{user.age}</span>
          </div>
          <div className="usercard__meta-item">
            <span className="usercard__label">Gender</span>
            <span className="usercard__value">{user.gender}</span>
          </div>
          <div className="usercard__meta-item">
            <span className="usercard__label">Country</span>
            <span className="usercard__value">{user.country}</span>
          </div>
        </div>

        <a className="usercard__email" href={`mailto:${user.email}`}>
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
