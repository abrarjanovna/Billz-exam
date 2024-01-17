import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import clsx from "clsx";
import CheckPage from "./CheckPage";

const KassaPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="-ml-72">
      <div className="mt-10 flex">
        <h1 className="text-2xl font-bold tracking-wide">Кассы</h1>
        <div className="ml-56">
          <div>
            <hr className="hr" />
            <h1 className="ml-6">Касса</h1>
            <h1 className="-mt-6" style={{ marginLeft: "510px" }}>
              Статус
            </h1>
          </div>
          <hr className="hr" />
        </div>
      </div>
      <div className={clsx(theme ? "d" : "l", "div ml-72 mt-4 font-semibold")}>
        <button className="ml-4">Cashbox Riviera</button>
        <button className="switch2 ml-96 mt-3 border-neutral-300 bg-neutral-300">
          <label>
            <input
              type="checkbox"
              name="theme-switch"
              id="theme-switch-input2"
              hidden
              onChange={(e) => changeTheme(e)}
            />
            <div className="ball2"></div>
          </label>
        </button>
      </div>
      <CheckPage/>
    </div>
  );
};

export default KassaPage;
