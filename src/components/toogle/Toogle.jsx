import React, { useContext } from "react";
import "./Toogle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { ThemeContext } from "../../Context";

const Toogle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="toogle"
      onClick={() => {
        theme.dispatch({ type: "toogle" });
      }}
    >
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={
          !darkMode
            ? {
                left: "2px",
              }
            : { right: "2px" }
        }
      ></div>
    </div>
  );
};

export default Toogle;
