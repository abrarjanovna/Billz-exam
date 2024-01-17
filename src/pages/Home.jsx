import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Link to="/store" className="text-3xl ml-96 mt-80">TO THE STORE</Link>
    </div>
  );
};

export default Home;
