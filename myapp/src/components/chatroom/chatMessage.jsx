import styles from "./chatroom.module.css";

const ChatMessage = ({ info }) => {
  const { message, sender, timestamp, isBot } = info;
  const mine = !isBot;

  const time = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`${styles.row} ${mine ? styles.rowMine : styles.rowBot}`}>
      <div className={styles.bubbleGroup}>
        <p className={`${styles.sender} ${mine ? styles.senderMine : ""}`}>
          {sender}
        </p>
        <div
          className={`${styles.bubble} ${mine ? styles.bubbleMine : styles.bubbleBot}`}
        >
          {message}
        </div>
        <span className={`${styles.time} ${mine ? styles.timeMine : ""}`}>
          {time}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
