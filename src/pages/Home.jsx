import { useContext } from "react";
import Switch from "../components/Switch";
import ThemeContext from "../context/ThemeContext";
import Sidebar from "../components/Sidebar";
import clsx from "clsx";
import img from "../images/billz.svg";
import "../styles/Header.css";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="header flex items-center">
      <div className={clsx(theme ? "d" : "l", "main")}>
        <img className="img" src={img} alt="logo" />
        <Sidebar />
      </div>
      <div className="main-nav">
        <Switch />
      </div>
    </div>
  );
};

export default Home;
