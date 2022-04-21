import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../images/github.png";
import LinkedIn from "../../images/linkedin.png";
import Instagram from "../../images/instagram.png";
import Vector1 from "../../images/Vector1.png";
import Vector2 from "../../images/Vector2.png";
import boy from "../../images/boy.png";
import thumbup from "../../images/thumbup.png";
import Crown from "../../images/crown.png";
import glassesimoji from "../../images/glassesimoji.png";
import FloatingDiv from "../floatingDiv/FloatingDiv";
import { ThemeContext } from "../../Context";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Ankit Grin</span>
          <span>
            I love creative stuff. I spend eight to ten hours a day in front of
            my computer screen as I am coding, debugging, or solving new
            problems.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/ankitgrin" target="_blank">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/ankitgrin" target="_blank">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/ankitgrin" target="_blank">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={boy} alt="boy" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt="glassesimoji"
          style={{ left: "-24%" }}
        />
        <motion.div
          initial={isMobile ? { left: "96%" } : { left: "74%" }}
          whileInView={isMobile ? { left: "80%" } : { left: "68%" }}
          transition={transition}
          style={
            isMobile ? { top: "-4%", left: "80%" } : { top: "-4%", left: "68%" }
          }
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={
            isMobile
              ? { top: "18rem", left: "-7rem" }
              : { top: "18rem", left: "9rem" }
          }
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="ReactJS" txt2="Proficient" />
        </motion.div>
        {/* blur divs */}
        {darkMode ? null : (
          <>
            <div
              className="blur"
              style={{ background: "rgb(238 210 255)" }}
            ></div>
            <div
              className="blur"
              style={{
                background: "#C1F5FF",
                top: "17rem",
                width: "21rem",
                height: "11rem",
                left: "-9rem",
              }}
            ></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Intro;
