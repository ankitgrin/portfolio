import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../images/heartemoji.png";
import Glasses from "../../images/glasses.png";
import Humble from "../../images/humble.png";
import Card from "../card/Card";
import CV from "./CV.pdf";
import { ThemeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: "spring" };
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome service-div">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          Web Developer Proficient in Html, Css,
          <br />
          JavaScript, ReactJS & Tailwind Css.
        </span>
        <a href={CV} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "28rem" }}
          whileInView={{ left: "21rem" }}
          transition={transition}
          style={{ left: "21rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"I'll use Tailwind Css to design my components"}
            link={"https://tailwindcss.com/"}
          />
        </motion.div>

        {/* second card */}
        <motion.div
          initial={{ left: "-5rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
          style={{ top: "12rem", left: "2rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, ReactJS, Tailwind Css"}
            link={"https://github.com/ankitgrin"}
          />
        </motion.div>

        {/* third card */}
        <motion.div
          initial={{ left: "33rem" }}
          whileInView={{ left: "18rem" }}
          transition={transition}
          style={{ top: "19rem", left: "18rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Animation"}
            detail={"I'll use framer motion library for animation"}
            link={"https://www.framer.com/motion"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
