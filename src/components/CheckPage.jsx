import check from "../images/check.svg";
import ContactsPage from "./ContactsPage";

const CheckPage = () => {
  return (
    <div>
      <div className="mt-10 flex">
        <h1 className="text-2xl font-bold tracking-wide">Чек</h1>
        <div className="ml-56 font-semibold">
          <input className="mb-5 ml-8" type="checkbox" />
          <h1 className="-ml-2">Стандартный</h1>
          <img className="-ml-24" src={check} alt="" />
        </div>
        <div className="ml-56 font-semibold">
          <input className="mb-5 ml-8" type="checkbox" />
          <h1 className="-ml-2">Кастомный</h1>
          <img className="-ml-24" src={check} alt="" />
        </div>
      </div>
      <hr className="-ml-12 mt-12" />
      <ContactsPage />
    </div>
  );
};

export default CheckPage;
