import ChatProvider from "../../contexts/ChatContext";
import ChatInput from "./chatInput";
import ChatsBox from "./chatsBox";
import Faq from "./faq";
import styles from "./chatroom.module.css";

const ChatRoom = () => {
  return (
    <ChatProvider>
      <div className={styles.room}>
        <div className={styles.chatPanel}>
          <ChatsBox />
          <ChatInput />
        </div>
      </div>
      <Faq />
    </ChatProvider>
  );
};

export default ChatRoom;
