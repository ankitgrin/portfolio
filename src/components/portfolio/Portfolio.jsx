import React, { useContext } from "react";
import "./Portfolio.css";
import Sidebar from "../../images/sidebar.png";
import Ecommerce from "../../images/ecommerce.png";
import "swiper/css";
import { ThemeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>
        Recent Projects<span></span>
      </span>

      {/* slides */}
      <div className="projects-slides">
        <a href="https://ankitgrin.github.io/Hunger" target="_blank">
          <img src={Sidebar} alt="Sidebar" />
        </a>
        <a href="https://ankitgrin.github.io/Sneakers" target="_blank">
          <img src={Ecommerce} alt="Ecommerce" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
