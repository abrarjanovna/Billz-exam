import { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { clsx } from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { add, deleted } from "../main/Reducer";
import { IoMdSearch } from "react-icons/io";
import ThemeContext from "../context/ThemeContext";
import Main from "./Main";
import delete_img from "../images/delete.svg";

const Settings = () => {
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

  const handleClick = (id) => {
    dispatch(deleted(id));
  };

  return (
    <div>
      <div style={{ marginTop: "-195%", marginLeft: "20%" }}>
        <div className="flex">
          <span className="mt-2 text-sky-600">
            <IoIosArrowBack />
          </span>
          <h1 className="ml-4 text-4xl font-semibold">
            <span className="text-gray-400">Магазин</span> Store Riviera
          </h1>
          <div style={{ marginLeft: "38%" }}>
            <button
              style={{
                margin: "20px",
                marginTop: "-10px",
                backgroundColor: "#f9f9f9",
                width: "100px",
                height: "40px",
                borderRadius: "12px",
                color: "#6F6F6F",
              }}
            >
              Сбросить
            </button>
            <button
              style={{
                backgroundColor: "#1F78Ff",
                width: "100px",
                height: "40px",
                borderRadius: "12px",
                color: "#fff",
              }}
            >
              Сохранить
            </button>
          </div>
        </div>
        <hr style={{ marginLeft: "-50px" }} />
        <form onSubmit={handleSubmit}>
          <input
            className={clsx(
              theme ? "d" : "l",
              "input  mt-5 h-12 w-5/6 rounded-2xl bg-slate-100 focus:outline-none",
            )}
            type="text"
            placeholder="Название магазина"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button
            style={{
              backgroundColor: "#1F78Ff",
              marginLeft: "20px",
              width: "150px",
              height: "50px",
              borderRadius: "1rem",
              color: "#fff",
            }}
            type="submit"
          >
            + Новый магазин
          </button>
          <IoMdSearch className="-mt-9 ml-3 text-2xl text-slate-400" />
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
        <Main />
      </div>
    </div>
  );
};

export default Settings;
