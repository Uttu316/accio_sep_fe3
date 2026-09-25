import Counter from "./components/counter";
import Footer from "./components/footer";
import Header from "./components/header";
import UserList from "./components/userlist";

function App() {
  return (
    <div>
      <Header title="My App" />
      <UserList />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
