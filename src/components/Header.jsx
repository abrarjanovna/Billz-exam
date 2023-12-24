import "../styles/Header.css";
import Switch from "./Switch";

const Header = () => {
  return (
    <div className="header-content">
      <div className="logo">
        <h1>Theme Switcher</h1>
      </div>
      <div className="main-nav-container">
      </div>
      <Switch />
    </div>
  );
};

export default Header;
