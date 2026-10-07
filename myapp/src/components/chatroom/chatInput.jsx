import { useContext } from "react";
import { IoSend as SendIcon } from "react-icons/io5";
import { ChatContext } from "../../contexts/ChatContext";
import styles from "./chatroom.module.css";

const ChatInput = () => {
  const { chat, setChat, sendMessage, isSending } = useContext(ChatContext);
  return (
    <div className={styles.inputBar}>
      <textarea
        id="chat-message"
        name="chat-message"
        className={styles.textarea}
        value={chat}
        onChange={(e) => setChat(e.target.value)}
        placeholder="Write your message here...."
      ></textarea>
      <button
        disabled={isSending}
        className={styles.sendBtn}
        onClick={sendMessage}
      >
        {isSending ? <span className={styles.sendSpinner} /> : <SendIcon />}
      </button>
    </div>
  );
};
export default ChatInput;
