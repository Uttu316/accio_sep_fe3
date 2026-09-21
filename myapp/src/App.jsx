import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <div className="page_section">
        <h2 className="page_welcome">Welcome to React</h2>
        <h3>
          By- <code>Utkarsh Gupta</code>
        </h3>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Context API</li>
          <li>Many More</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
