import React from "react";
import "./Intro.css";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoj1 from "../../img/glassesimoji.png";
import FlotingDiv from "../FlotingDIv/FlodingDiv";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="home" className="intro">
      <div className="i-left">
        <div className="i-name">
          <span
            style={{
              color: darkMode ? "white" : "",
            }}
          >
            Hey! I Am
          </span>
          <span>Mohammed Jawwad</span>
          <span
            style={{
              color: darkMode ? "var(--darkText)" : "",
            }}
          >
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <Insta color="#1faffc" size={"3rem"} />
          <a
            href="https://www.facebook.com/md.jawwad.581"
          >
            <Facebook color="#1faffc" size={"3rem"} />
          </a>
          <a href="https://github.com/mdjawwad">
            <Gitub color="#1faffc" size={"3rem"} />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesimoj1}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floting-div"
        >
          <FlotingDiv image={Crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: " 0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floting-div"
        >
          <FlotingDiv image={Thumbup} text1="Best Design" text2="Award" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255 )" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17REM",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Intro;
