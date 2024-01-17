import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { add } from "../main/Reducer";
import ThemeContext from "../context/ThemeContext";
import delete_img from "../images/delete.svg";
import clsx from "clsx";
import Sidebar from "../components/Sidebar";

const Store = () => {
  const { theme } = useContext(ThemeContext);
  const [inputVal, setInputVal] = useState("");
  const main = useSelector((state) => state.main);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim() !== "") {
      dispatch(add(inputVal));
      setInputVal("");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-12">
        <div className="mt-12 flex">
          <h1 className="ml-4 text-4xl font-semibold">Настройки магазинов</h1>
          <div style={{ marginLeft: "38%" }}></div>
        </div>
        <hr className="mt-8" />
        <form onSubmit={handleSubmit}>
          <input
            className={clsx(
              theme ? "d" : "l",
              "mt-6 w-[81%] rounded-2xl bg-gray-100 px-[45px] py-[19px] focus:outline-none",
            )}
            type="text"
            name="storename"
            placeholder="Название магазина"
          />
          <Link
            to="/newStore"
            className="ml-4 rounded-2xl bg-[#1f78ff] px-[16px] py-[19px] text-[#fff] "
          >
            + Новый магазин
          </Link>
          <IoMdSearch className="-mt-11 ml-3 text-2xl text-slate-400" />
        </form>
        <div className="mt-6">
          <hr />
          <div className="ml-4 flex h-12">
            <h1 className="pt-3">Магазин</h1>
            <h1 className="ml-96 pt-3">Кол-во касс</h1>
            <h1 className="ml-96 pt-3">Действие</h1>
          </div>
          <hr />
          <div>
            {main.map((name) => (
              <div key={name.id} className="ml-4 flex h-12">
                <h1 className="pt-3">
                  <span className="text-sky-500">{name.title}</span>
                </h1>
                <h1 className="ml-96 pt-3">{main.length}</h1>
                <button
                  style={{ marginLeft: "36%" }}
                  onClick={() => handleClick(name.id)}
                >
                  <img src={delete_img} alt="delete" />
                </button>
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Store;
