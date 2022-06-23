import React from "react";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";
import "./Works.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Works = () => {

  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="work">
      <div className="awesome">
        <span style={{color: darkMode ? "white" : ""}}>Works for All these</span>
        <span>Brands & Clints</span>
        <span style={{color: darkMode ? "var(--darkText)" : ''}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio eos
          <br />
          aliquid quidem? Itaque et maxime eveniet, eius, sint reprehenderit
          <br />
          quis reiciendis harum impedit, a accusamus veritatis in tempore
          <br />
          voluptate deserunt!
        </span>
        <button className="button s-button">Hire me</button>
        <div
          className="blur s-blur1"
          style={{
            background: "#abf1ff94",
          }}
        ></div>
      </div>
      <div className="w-right">
        <motion.div 
        initial={{rotate:45}}
        whileInView={{rotate: 0}}
        viewport={{margin: '-40px'}}
        transition={{duration:3.5 , type:'spring'}}
        className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};
export default Works;
