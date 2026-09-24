import "./header.css";
const Header = (props) => {
  const { title } = props;
  return (
    <header className="page_header">
      <h1 className="page_title">{title}</h1>
      <nav className="page_navbar">
        <a href="#">Contact</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
};

export default Header;
