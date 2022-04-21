import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, link }) => {
  return (
    <div className="card">
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href={link} target="_blank">
        <button className="c-button">LEARN MORE</button>
      </a>
    </div>
  );
};

export default Card;
