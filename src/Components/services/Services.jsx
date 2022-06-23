import React from "react";
import Resume from "../../Components/services/Mohammed-jawwad-O-2022.docx (1).odt";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../card/Card";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 1, type: "spring" };


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="services">
      <div className="awesome">
        <span style={{color: darkMode ? "white" : ''}}> My Awesome</span>
        <span>Services</span>
        <span style={{color: darkMode ? "var(--darkText)" : ''}} >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio eos
          aliquid quidem? Itaque et maxime eveniet, eius, sint reprehenderit
          quis reiciendis harum impedit, a accusamus veritatis in tempore
          voluptate deserunt!
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download Cv</button>
        </a>
        <div
          className="blur s-blur1"
          style={{
            background: "#abf1ff94",
          }}
        ></div>
       
      </div>
      <div  className="cards">
        <motion.div
         initial={{ left: "25rem" }}
         whileInView={{ left: "14rem" }}
         transition={transition}
        style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            title="Design"
            details="Adobe, Figma, Photoshop, Adobe XD, Skech"
          />
        </motion.div>
        <motion.div 
         initial={{ left: "15%", }}
         whileInView={{ left: "-4rem",  }}
         transition={transition}
        
        style={{ left: "-4rem", top: "12rem" }}>
          <Card
            emoji={Glasses}
            title="Developer"
            details="Html, Css, JavaScript, React.js, Angular.js"
          />
        </motion.div>
        <motion.div 
         initial={{ left: "25rem" }}
         whileInView={{ left: "12rem" }}
         transition={transition}
        style={{ left: "12rem", top: "18rem" }}>
          <Card
            emoji={Humble}
            title="UI/UX"
            details="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a inventore sapient."
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{
            background: "var(--purple)",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Services;
