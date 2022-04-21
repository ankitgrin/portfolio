import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../images/Upwork.png";
import Fiverr from "../../images/fiverr.png";
import Amazon from "../../images/amazon.png";
import Shopify from "../../images/Shopify.png";
import Facebook from "../../images/Facebook.png";
import { ThemeContext } from "../../Context";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

const Works = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome works-div">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works with All these {isMobile ? <span>Technologies</span> : ""}
        </span>
        {isMobile ? "" : <span>Technologies</span>}
        <span>
          I'll use ReactJS library for making different kinds of websites.
          <br />
          For designing i'll use Tailwind Css, for animation i'll use
          <br />
          former motion library and for deployment i'll use github.
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
          style={{ rotate: 0 }}
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Fiverr" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="Amazon" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="Shopify" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="Facebook" />
          </div>
        </motion.div>
        {/* background Circles */}

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
