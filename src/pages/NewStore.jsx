// import { IoIosArrowBack, IoMdSearch } from "react-icons/io";
import Sidebar from "../components/Sidebar";
// import clsx from "clsx";
// import { useContext } from "react";
// import ThemeContext from "../context/ThemeContext";
// import { Link } from "react-router-dom";

// const NewStore = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div>
//         <nav>
//           <h2 className="mb-8 ml-8 mt-12 flex items-center text-4xl font-bold">
//             <Link to={"/store"}>
//               <IoIosArrowBack className="mr-2 cursor-point p-1 text-blue-500" />
//             </Link>
//             <p>
//               <span>Новый магазин</span>
//             </p>
//           </h2>

//         </nav>
//         {/* <Main /> */}
//       </div>
//     </div>
//   );
// };

// export default NewStore;
import Cleave from "cleave.js/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { uid } from "uid";
import { FaChevronLeft } from "react-icons/fa6";
import { addShop } from "../main/shop";

export default function StoreMain() {
  // const { mode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const [shopTitle, setShopTitle] = useState("");
  const [quadrature, setquadrature] = useState("");
  const navigate = useNavigate();
  const addShopsHandler = () => {
    if (shopTitle && quadrature !== "") {
      const shop = {
        id: uid(),
        title: shopTitle,
        quadrature,
      };
      navigate("/store");
      dispatch(addShop(shop));
      setShopTitle("");
      setquadrature("");
    } else {
      return;
    }
  };
  return (
    <div className="flex">
      <Sidebar />
      <nav>
        <h2 className="mb-8 ml-8 mt-12 flex items-center text-4xl font-bold">
          <Link to="/store">
            <FaChevronLeft className=" mr-4 p-2 text-blue-500" />
          </Link>
          <p>
            <span>Новый магазин</span>
          </p>
        </h2>
        <div className="mr-8">
          <button
            onClick={() => addShopsHandler()}
            className={
              "mr-4 rounded-2xl bg-gray-300 px-[16px] py-[15px] font-medium  text-black"
            }
          >
            Создать
          </button>
        </div>
      </nav>
      <hr className="mb-8 mt-[130px]" />
      <section>
        <div className="w-1/5">
          <h3 className="text-2xl font-bold">Основные</h3>
        </div>
        <div className="w-3/4">
          <div className="flex">
            <div>
              <label htmlFor="nameStore" className="font-semibold">
                Наименование
              </label>
              <br />
              <input
                value={shopTitle}
                onChange={(e) => setShopTitle(e.target.value)}
                type="text"
                // className={
                //   mode
                //     ? "bg-gray-800 mr-[32px] rounded-2xl pl-[16px] w-[350px] h-[56px] mt-[16px] border-0 outline-none"
                //     : "bg-gray-100 mr-[32px] rounded-2xl pl-[16px] w-[350px] h-[56px] mt-[16px] border-0 outline-none"
                // }
                id="nameStore"
              />
            </div>
            <div className="relative">
              <label htmlFor="quadrature" className="font-semibold">
                Квадратура
              </label>
              <br />
              <input
                value={quadrature}
                onChange={(e) => setquadrature(e.target.value)}
                type="number"
                // className={
                //   mode
                //     ? "bg-gray-800 mr-[32px] rounded-2xl pl-[16px] w-[350px] h-[56px] mt-[16px] border-0 outline-none"
                //     : "bg-gray-100 mr-[32px] rounded-2xl pl-[16px] w-[350px] h-[56px] mt-[16px] border-0 outline-none"
                // }
                id="quadrature"
              />
              <p className="absolute right-[15%] top-[60%] font-semibold text-gray-400">
                м<sup>2</sup>
              </p>
            </div>
          </div>
          <div className="mb-[32px]">
            <p className="pb-[16px] pt-[32px] font-semibold">Режим работы</p>
            <div
            // className={
            //   mode
            //     ? "flex mr-[92px] rounded-2xl h-[65px] items-center bg-gray-800 justify-between pr-[16px]"
            //     : "flex mr-[92px] rounded-2xl h-[65px] items-center bg-gray-100 justify-between pr-[16px]"
            // }
            >
              <p className="border-end flex h-[100%] w-[135px] items-center px-[16px] font-semibold">
                Понедельник
              </p>
              <div className="flex w-[30%] justify-around">
                <p className="font-semibold text-gray-300">Открытие:</p>
                <Cleave
                  className="w-[50px] bg-inherit p-0 text-gray-500 outline-none"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="flex w-[30%] justify-around">
                <p className="font-semibold text-gray-300">Закрытие:</p>
                <Cleave
                  className="w-[50px] border-0 bg-inherit text-gray-500 outline-none"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="form-check form-switch flex w-[15%] justify-end text-2xl">
                <input
                  className="form-check-input p-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                ></input>
              </div>
            </div>
            <div
            // className={
            //   mode
            //     ? "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-800 justify-between pr-[16px]"
            //     : "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-100 justify-between pr-[16px]"
            // }
            >
              <p className="border-end flex h-[100%] w-[135px] items-center px-[16px] font-semibold">
                Вторник
              </p>
              <div className="flex w-[30%] justify-around">
                <p className="font-semibold text-gray-300">Открытие:</p>
                <Cleave
                  className="w-[50px] bg-inherit p-0 text-gray-500 outline-none"
                  options={{ time: true, timePattern: ["d", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="flex w-[30%] justify-around">
                <p className="font-semibold text-gray-300">Закрытие:</p>
                <Cleave
                  className="w-[50px] border-0 bg-inherit text-gray-500 outline-none"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="form-check form-switch flex w-[15%] justify-end text-2xl">
                <input
                  className="form-check-input p-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                ></input>
              </div>
            </div>
            <div
            // className={
            //   mode
            //     ? "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-800 justify-between pr-[16px]"
            //     : "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-100 justify-between pr-[16px]"
            // }
            >
              <p className="border-end flex h-[100%] w-[135px] items-center px-[16px] font-semibold">
                Среда
              </p>
              <div className="flex w-[30%] justify-around">
                <p className="font-semibold text-gray-300">Открытие:</p>
                <Cleave
                  className="w-[50px] bg-inherit p-0 text-gray-500 outline-none"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="flex w-[30%] justify-around">
                <p className="font-semibold text-gray-300">Закрытие:</p>
                <Cleave
                  className="w-[50px] border-0 bg-inherit text-gray-500 outline-none"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="form-check form-switch flex w-[15%] justify-end text-2xl">
                <input
                  className="form-check-input p-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                ></input>
              </div>
            </div>
            <div
            // className={
            //   mode
            //     ? "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-800 justify-between pr-[16px]"
            //     : "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-100 justify-between pr-[16px]"
            // }
            >
              <p className="border-end flex h-[100%] w-[135px] items-center px-[16px] font-semibold">
                Четверг
              </p>
              <div className="flex w-[30%] justify-around">
                <p className="font-semibold text-gray-300">Открытие:</p>
                <Cleave
                  className="w-[50px] bg-inherit p-0 text-gray-500 outline-none"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="flex w-[30%] justify-around">
                <p className="font-semibold text-gray-300">Закрытие:</p>
                <Cleave
                  className="w-[50px] border-0 bg-inherit text-gray-500 outline-none"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="form-check form-switch flex w-[15%] justify-end text-2xl">
                <input
                  className="form-check-input p-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                ></input>
              </div>
            </div>
            <div
            // className={
            //   mode
            //     ? "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-800 justify-between pr-[16px]"
            //     : "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-100 justify-between pr-[16px]"
            // }
            >
              <p className="border-end flex h-[100%] w-[135px] items-center px-[16px] font-semibold">
                Пятница
              </p>
              <div className="flex w-[30%] justify-around">
                <p className="font-semibold text-gray-300">Открытие:</p>
                <Cleave
                  className="w-[50px] bg-inherit p-0 text-gray-500 outline-none"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="flex w-[30%] justify-around">
                <p className="font-semibold text-gray-300">Закрытие:</p>
                <Cleave
                  className="w-[50px] border-0 bg-inherit text-gray-500 outline-none"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="form-check form-switch flex w-[15%] justify-end text-2xl">
                <input
                  className="form-check-input p-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                ></input>
              </div>
            </div>
            <div
            // className={
            //   mode
            //     ? "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-800 justify-between pr-[16px]"
            //     : "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-100 justify-between pr-[16px]"
            // }
            >
              <p className="border-end flex h-[100%] w-[135px] items-center px-[16px] font-semibold">
                Суббота
              </p>
              <div className="flex w-[30%] justify-around">
                <p className="font-semibold text-gray-300">Открытие:</p>
                <Cleave
                  className="w-[50px] bg-inherit p-0 text-gray-500 outline-none"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="flex w-[30%] justify-around">
                <p className="font-semibold text-gray-300">Закрытие:</p>
                <Cleave
                  className="w-[50px] border-0 bg-inherit text-gray-500 outline-none"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="form-check form-switch flex w-[15%] justify-end text-2xl">
                <input
                  className="form-check-input p-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                ></input>
              </div>
            </div>
            <div
            // className={
            //   mode
            //     ? "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-800 justify-between pr-[16px]"
            //     : "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-100 justify-between pr-[16px]"
            // }
            >
              <p className="border-end flex h-[100%] w-[135px] items-center px-[16px] font-semibold">
                Воскресенье
              </p>
              <div className="flex w-[30%] justify-around">
                <p className="font-semibold text-gray-300">Открытие:</p>
                <Cleave
                  className="w-[50px] bg-inherit p-0 text-gray-500 outline-none"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="flex w-[30%] justify-around">
                <p className="font-semibold text-gray-300">Закрытие:</p>
                <Cleave
                  className="w-[50px] border-0 bg-inherit text-gray-500 outline-none"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="form-check form-switch flex w-[15%] justify-end text-2xl">
                <input
                  className="form-check-input p-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="mb-[32px]" />
    </div>
  );
}
