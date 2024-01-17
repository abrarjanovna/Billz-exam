import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { uid } from "uid";
import { FaChevronLeft } from "react-icons/fa6";
import { add } from "../main/shop";
import { useDispatch } from "react-redux";
import Sidebar from "../components/Sidebar";
import Cleave from "cleave.js/react";
import clsx from "clsx";
import ThemeContext from "../context/ThemeContext";
import KassaPage from "../components/Kassapage";

export default function Store() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [square, setSquare] = useState("");
  const navigate = useNavigate();
  const addShop = () => {
    if (name && square !== "") {
      const shop = {
        id: uid(),
        title: name,
        square,
      };
      navigate("/store");
      dispatch(add(shop));
      setName("");
      setSquare("");
    } else {
      return;
    }
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex">
        <h2 className="mb-8 ml-8 mt-12 flex text-4xl font-bold">
          <Link to="/store">
            <FaChevronLeft className="mr-4 p-2 text-blue-500" />
          </Link>
          Mагазин
        </h2>
        <button className="ml-[600px] mt-[40px] h-[60px]">Сбросить</button>
        <button
          onClick={() => addShop()}
          className={
            setName && square
              ? "rounded-2xl bg-blue-600 px-[16px] py-[15px] text-white"
              : "rounded-2xl bg-gray-300 px-[16px] py-[15px]"
          }
          style={{ height: "60px", marginTop: "40px", marginLeft: "22px" }}
        >
          Сохранить
        </button>
      </div>
      <div className="mt-36 flex" style={{ marginLeft: "-1000px" }}>
        <h1 className="text-2xl font-bold tracking-wide">Основные</h1>
        <div className="ml-40">
          <div className="flex">
            <div>
              <h1 className="font-semibold">Наименование</h1>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Введите имя"
                id="nameStore"
                className={clsx(
                  theme ? "d" : "l",
                  "-ml-2 mt-3 h-14 w-80 rounded-2xl border-2",
                  "p-3 focus:outline-none",
                )}
              />
            </div>
            <div className="relative ml-10">
              <h1 className="font-semibold">Квадратура</h1>
              <input
                value={square}
                onChange={(e) => setSquare(e.target.value)}
                type="number"
                placeholder="Введите квадратуру"
                id="square"
                className={clsx(
                  theme ? "d" : "l",
                  "-ml-2 mt-3 h-14 w-80 rounded-2xl border-2",
                  "p-3 focus:outline-none",
                )}
              />
              <p className="absolute right-[10%] top-[56%] font-semibold text-gray-400">
                м<sup>2</sup>
              </p>
            </div>
          </div>
          <div className="font-semibold">
            <h1 className="mt-11">Режим работы</h1>
            <div className={clsx(theme ? "d" : "l", "div mt-4")}>
              <button type="button" className="button">
                Понедельник
              </button>
              <div className="vl"></div>
              <p className="ml-8 mt-4 font-semibold text-gray-300">Открытие:</p>
              <Cleave
                className="ml-2 w-[50px] bg-inherit p-0 text-gray-500 outline-none"
                options={{ time: true, timePattern: ["h", "m"] }}
                placeholder="XX:XX"
              />
              <p className="ml-5 mt-4 font-semibold text-gray-300">Закрытие:</p>
              <Cleave
                className="ml-2 w-[50px] border-0 bg-inherit text-gray-500 outline-none"
                options={{ time: true, timePattern: ["h", "m"] }}
                placeholder="XX:XX"
              />
              <button className="switch2 ml-28 mt-3 border-neutral-300 bg-neutral-300">
                <label>
                  <input
                    type="checkbox"
                    name="theme-switch"
                    id="theme-switch-input2"
                    hidden
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
              <p className="ml-8 mt-4 font-semibold text-gray-300">Открытие:</p>
              <Cleave
                className="ml-2 w-[50px] bg-inherit p-0 text-gray-500 outline-none"
                options={{ time: true, timePattern: ["h", "m"] }}
                placeholder="XX:XX"
              />
              <p className="ml-5 mt-4 font-semibold text-gray-300">Закрытие:</p>
              <Cleave
                className="ml-2 w-[50px] border-0 bg-inherit text-gray-500 outline-none"
                options={{ time: true, timePattern: ["h", "m"] }}
                placeholder="XX:XX"
              />
              <button className="switch2 ml-28 mt-3 border-neutral-300 bg-neutral-300">
                <label>
                  <input
                    type="checkbox"
                    name="theme-switch"
                    id="theme-switch-input2"
                    hidden
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
              <p className="ml-8 mt-4 font-semibold text-gray-300">Открытие:</p>
              <Cleave
                className="ml-2 w-[50px] bg-inherit p-0 text-gray-500 outline-none"
                options={{ time: true, timePattern: ["h", "m"] }}
                placeholder="XX:XX"
              />
              <p className="ml-5 mt-4 font-semibold text-gray-300">Закрытие:</p>
              <Cleave
                className="ml-2 w-[50px] border-0 bg-inherit text-gray-500 outline-none"
                options={{ time: true, timePattern: ["h", "m"] }}
                placeholder="XX:XX"
              />
              <button className="switch2 ml-28 mt-3 border-neutral-300 bg-neutral-300">
                <label>
                  <input
                    type="checkbox"
                    name="theme-switch"
                    id="theme-switch-input2"
                    hidden
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
              <p className="ml-8 mt-4 font-semibold text-gray-300">Открытие:</p>
              <Cleave
                className="ml-2 w-[50px] bg-inherit p-0 text-gray-500 outline-none"
                options={{ time: true, timePattern: ["h", "m"] }}
                placeholder="XX:XX"
              />
              <p className="ml-5 mt-4 font-semibold text-gray-300">Закрытие:</p>
              <Cleave
                className="ml-2 w-[50px] border-0 bg-inherit text-gray-500 outline-none"
                options={{ time: true, timePattern: ["h", "m"] }}
                placeholder="XX:XX"
              />
              <button className="switch2 ml-28 mt-3 border-neutral-300 bg-neutral-300">
                <label>
                  <input
                    type="checkbox"
                    name="theme-switch"
                    id="theme-switch-input2"
                    hidden
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
              <p className="ml-8 mt-4 font-semibold text-gray-300">Открытие:</p>
              <Cleave
                className="ml-2 w-[50px] bg-inherit p-0 text-gray-500 outline-none"
                options={{ time: true, timePattern: ["h", "m"] }}
                placeholder="XX:XX"
              />
              <p className="ml-5 mt-4 font-semibold text-gray-300">Закрытие:</p>
              <Cleave
                className="ml-2 w-[50px] border-0 bg-inherit text-gray-500 outline-none"
                options={{ time: true, timePattern: ["h", "m"] }}
                placeholder="XX:XX"
              />
              <button className="switch2 ml-28 mt-3 border-neutral-300 bg-neutral-300">
                <label>
                  <input
                    type="checkbox"
                    name="theme-switch"
                    id="theme-switch-input2"
                    hidden
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
              <p className="ml-8 mt-4 font-semibold text-gray-300">Открытие:</p>
              <Cleave
                className="ml-2 w-[50px] bg-inherit p-0 text-gray-500 outline-none"
                options={{ time: true, timePattern: ["h", "m"] }}
                placeholder="XX:XX"
              />
              <p className="ml-5 mt-4 font-semibold text-gray-300">Закрытие:</p>
              <Cleave
                className="ml-2 w-[50px] border-0 bg-inherit text-gray-500 outline-none"
                options={{ time: true, timePattern: ["h", "m"] }}
                placeholder="XX:XX"
              />
              <button className="switch2 ml-28 mt-3 border-neutral-300 bg-neutral-300">
                <label>
                  <input
                    type="checkbox"
                    name="theme-switch"
                    id="theme-switch-input2"
                    hidden
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
              <p className="ml-8 mt-4 font-semibold text-gray-300">Открытие:</p>
              <Cleave
                className="ml-2 w-[50px] bg-inherit p-0 text-gray-500 outline-none"
                options={{ time: true, timePattern: ["h", "m"] }}
                placeholder="XX:XX"
              />
              <p className="ml-5 mt-4 font-semibold text-gray-300">Закрытие:</p>
              <Cleave
                className="ml-2 w-[50px] border-0 bg-inherit text-gray-500 outline-none"
                options={{ time: true, timePattern: ["h", "m"] }}
                placeholder="XX:XX"
              />
              <button className="switch2 ml-28 mt-3 border-neutral-300 bg-neutral-300">
                <label>
                  <input
                    type="checkbox"
                    name="theme-switch"
                    id="theme-switch-input2"
                    hidden
                  />
                  <div className="ball2"></div>
                </label>
              </button>
            </div>
          </div>
        <KassaPage/>
        </div>
      </div>
    </div>
  );
}
