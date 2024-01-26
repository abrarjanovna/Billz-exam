import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdSettings } from "react-icons/io";
import Switch from "./Switch";
import ThemeContext from "../context/ThemeContext";
import "../styles/Header.css";
import user from "../images/user.svg";
import clsx from "clsx";
import img from "../images/billz.svg";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="header flex">
      <div className={clsx(theme ? "d" : "l", "main")}>
        <img className="img" src={img} alt="logo" />
        <div className="-mt-16 mb-8 ml-44">
          <Switch />
        </div>
        <div>
          <button className="flex h-[1000%] w-[100%] pb-2 pl-8 pt-4 focus:bg-[#e0e7ee] focus:text-[#4993dd]">
            <IoIosArrowBack
              className="text-xl"
              style={{ marginLeft: "-5px", marginTop: "2px" }}
            />
            <IoMdSettings
              className="ml-2 flex text-xl"
              style={{ color: "1F78FF", marginTop: "2px" }}
            />
            <Link
              to="/settings"
              className="ml-3 text-lg font-bold tracking-wide"
            >
              Настройки
            </Link>
          </button>
          <button className="flex h-[1000%] w-[100%] pb-2 pl-8 pt-4 hover:bg-[#e0e7ee] hover:text-[#4993dd]">
            <Link to="/profile" className="text-lg font-bold tracking-wide">
              Профиль
            </Link>
          </button>
          <button className="flex h-[1000%] w-[100%] pb-2 pl-8 pt-4 hover:bg-[#e0e7ee] hover:text-[#4993dd]">
            <Link to="/company" className="text-lg font-bold tracking-wide">
              Компания
            </Link>
          </button>
          <button className="flex h-[100%] w-[100%] pb-2 pl-8 pt-4 hover:bg-[#e0e7ee] hover:text-[#4993dd] focus:bg-[#e0e7ee] focus:text-[#4993dd]">
            <Link to="/store" className="text-lg font-bold tracking-wide">
              Магазины
            </Link>
          </button>
          <button className="flex h-[1000%] w-[100%] pb-2 pl-8 pt-4 hover:bg-[#e0e7ee] hover:text-[#4993dd]">
            <Link to="/kassa" className="text-lg font-bold tracking-wide">
              Кассы
            </Link>
          </button>
          <button className="flex h-[1000%] w-[100%] pb-2 pl-8 pt-4 hover:bg-[#e0e7ee] hover:text-[#4993dd]">
            <Link to="/checks" className="text-lg font-bold tracking-wide">
              Чеки
            </Link>
          </button>
          <button className="flex h-[1000%] w-[100%] pb-2 pl-8 pt-4 hover:bg-[#e0e7ee] hover:text-[#4993dd]">
            <Link to="/currency" className="text-lg font-bold tracking-wide">
              Валюты и оплата
            </Link>
          </button>
          <button className="flex h-[1000%] w-[100%] pb-2 pl-8 pt-4 hover:bg-[#e0e7ee] hover:text-[#4993dd]">
            <Link to="/product" className="text-lg font-bold tracking-wide">
              Товары
            </Link>
          </button>
          <div className="flex pb-2 pl-8 pt-32">
            <img src={user} alt="user" />
            <p className="ml-2 mt-1 text-base font-bold tracking-wide">
              Достонхон <br />
              Озодходжаев
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
