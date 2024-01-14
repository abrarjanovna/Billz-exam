import { IoIosArrowBack } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import user from "../images/user.svg";

const SidebarBtn = (props) => {
  return (
    <div>
      <button className="pb-2 pl-8 pt-4">
        <span className="text-base font-bold tracking-wide">{props.name}</span>
      </button>
    </div>
  );
};
const Sidebar = () => {
  return (
    <div>
      <button className="flex pb-2 pl-8 pt-4">
        <IoIosArrowBack
          className="text-xl"
          style={{ marginLeft: "-5px", marginTop: "2px" }}
        />
        <IoMdSettings
          className="ml-2 flex text-xl"
          style={{ color: "1F78FF", marginTop: "2px" }}
        />
        <span className="ml-3 text-base font-bold tracking-wide">
          Настройки
        </span>
      </button>
      <SidebarBtn name="Профиль" />
      <SidebarBtn name="Компания" />
      <div style={{ backgroundColor: "#E0E7EE" }}>
        <button className="pb-4 pl-8 pt-4">
          <span
            className="font-bold tracking-wide"
            style={{ color: "#4993DD" }}
          >
            Магазины
          </span>
        </button>
      </div>
      <SidebarBtn name="Кассы" />
      <SidebarBtn name="Чеки" />
      <SidebarBtn name="Валюты и оплата" />
      <SidebarBtn name="Товары" />
      <div className="flex pb-2 pl-8 pt-40">
        <img src={user} alt="user" />
        <p className="ml-2 mt-1 text-base font-bold tracking-wide">
          Достонхон <br />
          Озодходжаев
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
