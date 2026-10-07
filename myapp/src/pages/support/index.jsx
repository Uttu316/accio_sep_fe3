import ChatRoom from "../../components/chatroom";
import PageWrapper from "../../components/pageWrapper";
import styles from "./support.module.css";

const SupportPage = () => {
  return (
    <PageWrapper title={"Support"} className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Customer <span>Support</span>
        </h1>
        <p className={styles.sub}>
          We're here to help. Start a chat or browse common questions below.
        </p>
      </div>
      <ChatRoom />
    </PageWrapper>
  );
};
export default SupportPage;
