import Controller from "../../components/Controller";
import Counter from "../../components/counter";
import PageWrapper from "../../components/pageWrapper";
import UserList from "../../components/userlist";
import styles from "./practice.module.css";

const PracticePage = () => {
  return (
    <PageWrapper title="My App" className={styles.page}>
      <UserList />
      <Counter />
      <Controller />
    </PageWrapper>
  );
};

export default PracticePage;
