import React from "react";
import "./Card.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Card = ({ details, title, emoji }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div  className="card">
      <img src={emoji} alt="" />
      <span>{title}</span>
      <span style={{color: darkMode ? "var(--darkText)" : ''}}>{details}</span>
      <button className="c-button">Learn More</button>
    </div>
  );
};
export default Card;
