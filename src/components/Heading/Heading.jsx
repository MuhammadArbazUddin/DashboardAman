import React from "react";
import "./Heading.css";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="heading-container">
      <h1 className="heading-title">{title}</h1>
      {subtitle && <h2 className="heading-subtitle">{subtitle}</h2>}
    </div>
  );
};

export default Heading;
