import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import clsx from "clsx";

const ThemeContainer = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <div className={clsx(theme ? "dark" : "light")}>{children}</div>;
};

export default ThemeContainer;
