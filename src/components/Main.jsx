import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import clsx from "clsx";
import Kassa from "./Kassapage";

const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mt-9">
      <h1 className="text-2xl font-bold tracking-wide">Основные</h1>
      <div className="inline-block font-semibold">
        <h2 className="-mt-7 ml-72">Наименование</h2>
        <button
          className={clsx(
            theme ? "d" : "l",
            "ml-72 mt-3 h-14 w-80 rounded-2xl border-2",
          )}
        >
          <span className="-ml-48">Store Riviera</span>
        </button>
      </div>
      <div className="inline-block font-semibold">
        <h2 className="-mt-7 ml-8">Квадратура</h2>
        <input
          type="number"
          className={clsx(
            theme ? "d" : "l",
            "inp ml-8 mt-3 h-14 w-80 rounded-2xl border-2 focus:outline-none",
          )}
          placeholder="Введите квадратуру                     м2"
        />
      </div>
      <div className="ml-72 font-semibold">
        <h1 className="mt-11">Режим работы</h1>
        <div className={clsx(theme ? "d" : "l", "div mt-4")}>
          <button type="button" className="button">
            Понедельник
          </button>
          <div className="vl"></div>
          <input
            type="text"
            className="inpp"
            placeholder="    Открытие:   XX:XX     Закрытие:   XX:XX"
          />
          <button className="switch2 mt-3 border-neutral-300 bg-neutral-300">
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
        <div className={clsx(theme ? "d" : "l", "div mt-4")}>
          <button type="button" className="button">
            Вторник
          </button>
          <div className="vl"></div>
          <input
            type="text"
            className="inpp"
            placeholder="    Открытие:   XX:XX     Закрытие:   XX:XX"
          />
          <button className="switch2 mt-3 border-neutral-300 bg-neutral-300">
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
        <div className={clsx(theme ? "d" : "l", "div mt-4")}>
          <button type="button" className="button">
            Среда
          </button>
          <div className="vl"></div>
          <input
            type="text"
            className="inpp"
            placeholder="    Открытие:   XX:XX     Закрытие:   XX:XX"
          />
          <button className="switch2 mt-3 border-neutral-300 bg-neutral-300">
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
        <div className={clsx(theme ? "d" : "l", "div mt-4")}>
          <button type="button" className="button">
            Четверг
          </button>
          <div className="vl"></div>
          <input
            type="text"
            className="inpp"
            placeholder="    Открытие:   XX:XX     Закрытие:   XX:XX"
          />
          <button className="switch2 mt-3 border-neutral-300 bg-neutral-300">
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
        <div className={clsx(theme ? "d" : "l", "div mt-4")}>
          <button type="button" className="button">
            Пятница
          </button>
          <div className="vl"></div>
          <input
            type="text"
            className="inpp"
            placeholder="    Открытие:   XX:XX     Закрытие:   XX:XX"
          />
          <button className="switch2 mt-3 border-neutral-300 bg-neutral-300">
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
        <div className={clsx(theme ? "d" : "l", "div mt-4")}>
          <button type="button" className="button">
            Суббота
          </button>
          <div className="vl"></div>
          <input
            type="text"
            className="inpp"
            placeholder="    Открытие:   XX:XX     Закрытие:   XX:XX"
          />
          <button className="switch2 mt-3 border-neutral-300 bg-neutral-300">
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
        <div className={clsx(theme ? "d" : "l", "div mt-4")}>
          <button type="button" className="button">
            Воскресенье
          </button>
          <div className="vl"></div>
          <input
            type="text"
            className="inpp"
            placeholder="    Открытие:   XX:XX     Закрытие:   XX:XX"
          />
          <button className="switch2 mt-3 border-neutral-300 bg-neutral-300">
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
      </div>
      <hr className="-ml-12 mt-12" />
      <Kassa />
    </div>
  );
};

export default Main;
