import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import UserList from "./components/userlist";

function App() {
  return (
    <div>
      <Header title="My App" />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;
