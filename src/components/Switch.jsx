import "../styles/Switch.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Switch = () => {
  const { setTheme } = useContext(ThemeContext);

  const changeTheme = (event) => {
    setTheme(event.target.checked);
  };
  return (
    <div className="switch">
      <label className="theme-switch">
      <input type="checkbox" name="theme-switch" id="theme-switch-input" hidden onChange={(e) => changeTheme(e)} />
      <div className="ball"></div>
    </label>
    </div>
  );
};

export default Switch;
