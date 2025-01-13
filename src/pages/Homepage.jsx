import React from 'react';
import Picture from '../components/Picture';
import data from "../helper/data";
import "../styles/style.css";

const Homepage = () => {
  return (
    <div>
      <h1>Images</h1>
      <div className="pictures">
        {data.map((item, index) => (
          <Picture 
            key={index} 
            imgSrc={item.src.large} 
            photographer={item.photographer} 
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
