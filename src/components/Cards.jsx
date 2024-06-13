import React from "react";
import "./Cards.css";

const Cards = (props) => {
  const { technologies } = props;
  return (
    <div className="cards">
      <div className="cards-container">
        <img src="cpp.png" alt="Project" />
        <h3>Project Name</h3>
        <div className="technologies-used">
          {technologies.map((technology, index) => (
            <button key={index}>{technology}</button>
          ))}
        </div>
        <div className="viewProject">
          <button>View</button>
          <button>Source</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
