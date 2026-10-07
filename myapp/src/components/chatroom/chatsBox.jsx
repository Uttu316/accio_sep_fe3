import { useContext } from "react";
import { FiMessageCircle, FiAlertTriangle } from "react-icons/fi";
import ChatMessage from "./chatMessage";
import { ChatContext } from "../../contexts/ChatContext";
import styles from "./chatroom.module.css";

const ChatsBox = () => {
  const { messages, chatRef, isSending, isError } = useContext(ChatContext);
  const isEmpty = messages.length === 0;

  if (isEmpty) {
    return (
      <div className={styles.empty}>
        <span className={styles.emptyIcon}>
          <FiMessageCircle />
        </span>
        <h2 className={styles.emptyTitle}>
          Tell us your query and our experts will get back to you shortly
        </h2>
        <p className={styles.emptyHint}>
          Type a message below to start the conversation.
        </p>
      </div>
    );
  }

  return (
    <div ref={chatRef} className={styles.chats}>
      {messages.map((item) => (
        <ChatMessage info={item} key={item.id} />
      ))}

      {isSending && (
        <div className={`${styles.row} ${styles.rowBot}`}>
          <div className={styles.bubbleGroup}>
            <p className={styles.sender}>Support</p>
            <div className={`${styles.bubble} ${styles.bubbleTyping}`}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
          </div>
        </div>
      )}

      {isError && (
        <div className={`${styles.row} ${styles.rowBot}`}>
          <div className={styles.errorBubble}>
            <FiAlertTriangle className={styles.errorBubbleIcon} />
            <span>Message failed to send. Please try again.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatsBox;
