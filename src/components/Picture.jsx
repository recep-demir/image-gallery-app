import React from 'react';

const Picture = ({ imgSrc, photographer }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={imgSrc} alt={photographer} />
      </div>
      <div className="info">
        <h6>{photographer}</h6>
      </div>
    </div>
  );
};

export default Picture;
