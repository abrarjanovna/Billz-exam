import clsx from "clsx";
import ThemeContext from "../context/ThemeContext";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../main/Reducer";
import Requisites from "./Requisites";

const ContactsPage = () => {
  const { theme } = useContext(ThemeContext);
  const [inputVal, setInputVal] = useState("");

  const dispatch = useDispatch();

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (inputVal.trim() !== "") {
      dispatch(add(inputVal));
      setInputVal("");
    }
  };

  return (
    <div>
      <div className="mt-10 flex font-semibold">
        <h1 className="text-2xl font-bold tracking-wide">Контакты</h1>
        <div>
          <h1 className="ml-20">Телефоны</h1>
          <div className="ml-20 mt-4">
            <form onSubmit={handleSubmit2}>
              <input
                placeholder="+998  XX  XXX  XX  XX"
                className={clsx(
                  theme ? "d" : "l",
                  "btn h-14 w-80 rounded-2xl p-2 focus:outline-none","p-4"
                )}
                type="tel"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <button
                type="submit"
                className={clsx(theme ? "d" : "l", "btn ml-12 text-sky-500")}
              >
                + Добавить телефон
              </button>
            </form>
            <h1 className="mt-8">Facebook</h1>
            <div className="flex">
              <input
                placeholder="Название страницы"
                className={clsx(
                  theme ? "d" : "l",
                  "btn mt-4 h-14 w-80 rounded-2xl focus:outline-none p-4",
                )}
                type="text"
              />
              <h1 style={{ marginTop: "-1.5pc", marginLeft: "60px" }}>
                Instagram
              </h1>
              <input
                placeholder="@ Юзернейм"
                className={clsx(
                  theme ? "d" : "l",
                  "btn -ml-20 mt-4 focus:outline-none","p-4"
                )}
              />
            </div>
            <h1 className="mt-8">Telegram</h1>
            <div className="flex">
              <input
                placeholder="@ Юзернейм"
                className={clsx(
                  theme ? "d" : "l",
                  "btn mt-4 h-14 w-80 rounded-2xl p-2 focus:outline-none",'p-4'
                )}
                type="text"
              />
              <h1 style={{ marginTop: "-20px", marginLeft: "60px" }}>Сайт</h1>
              <input
                placeholder="Ссылка на сайт"
                className={clsx(
                  theme ? "d" : "l",
                  "btn -ml-11 mt-4 focus:outline-none","p-4"
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <Requisites />
    </div>
  );
};

export default ContactsPage;
