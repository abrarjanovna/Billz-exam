import clsx from "clsx";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Requisites = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div className="mt-9">
        <h1 className="text-2xl font-bold tracking-wide">Реквизиты</h1>
        <div className="inline-block font-semibold">
          <h2 className="-mt-7 ml-72">Магазин имеет уникальные реквизиты?</h2>
          <div>
            <button
              className={clsx(
                theme ? "d" : "l",
                "ml-72 mt-3 h-14 w-40 rounded-2xl border-2 bg-neutral-100 hover:bg-white",
              )}
            >
              Да
            </button>
            <button
              className={clsx(
                theme ? "d" : "l",
                "mt-3 h-14 w-40 rounded-2xl border-2 bg-neutral-100 hover:bg-white",
              )}
            >
              Нет
            </button>
          </div>
        </div>
        <div className="inline-block font-semibold">
          <h2 className="-mt-7 ml-8">Юридическое название компании</h2>
          <input
            type="text"
            className={clsx(
              theme ? "d" : "l",
              "inp ml-8 mt-3 h-14 w-80 rounded-2xl border-2 focus:outline-none",
            )}
            placeholder="Введите название"
          />
        </div>
      </div>
      <div className="font-semibold">
        <h2 className="ml-72 mt-7">Юридический адрес</h2>
        <div>
          <input
            className={clsx(
              theme ? "d" : "l",
              "inp ml-72 mt-5 h-12 rounded-2xl bg-slate-100 focus:outline-none",
            )}
            style={{ width: "672px" }}
            type="text"
            placeholder="Город, район, улица, дом"
          />
        </div>
        <select
          className={clsx(
            theme ? "d" : "l",
            "inp ml-72 mt-6 h-14 w-80 rounded-2xl border-2 focus:outline-none",
          )}
        >
          <option value="0">Узбекистан</option>
          <option value="1">Узбекистан</option>
          <option value="2">Узбекистан</option>
          <option value="3">Узбекистан</option>
          <option value="4">Узбекистан</option>
          <option value="5">Узбекистан</option>
        </select>
        <input
          type="text"
          className={clsx(
            theme ? "d" : "l",
            "inp ml-8 mt-3 h-14 w-80 rounded-2xl border-2 focus:outline-none",
          )}
          placeholder="Введите почтовый индекс"
        />
      </div>
      <div className="inline-block font-semibold">
        <h2 className="ml-72 mt-7">Юридический адрес</h2>
        <input
          className={clsx(
            theme ? "d" : "l",
            "inp ml-72 mt-5 h-12 rounded-2xl bg-slate-100 focus:outline-none",
          )}
          style={{ width: "672px" }}
          type="text"
          placeholder="Введите банковский счет"
        />
        <input
          className={clsx(
            theme ? "d" : "l",
            "inp ml-72 h-12 rounded-2xl bg-slate-100 focus:outline-none",
          )}
          style={{ width: "672px" }}
          type="text"
          placeholder="Название банка и филиал"
        />
        <input
          className={clsx(
            theme ? "d" : "l",
            "i ml-72 mt-5 h-12 rounded-2xl bg-slate-100 focus:outline-none",
          )}
          style={{ width: "672px" }}
          type="text"
          placeholder="+ Добавить еще один банковский счет"
        />
      </div>
      <div className="box"></div>
    </div>
  );
};

export default Requisites;
