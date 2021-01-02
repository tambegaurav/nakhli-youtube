import React, { useState } from "react";
import "./CategoriesBar.scss";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "Use of API",
  "Redux",
  "Music",
  "DS and Algo",
  "Machine Learning",
  "Dua Lipa",
  "Native Apps",
  "Funding",
  "Elon Musk",
  "Modi Scam",
  "Magic trick",
  "Maroon 5",
  "Linkin Park",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value);
  };

  return (
    <div className="categories_bar">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value)}
          key={i}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
