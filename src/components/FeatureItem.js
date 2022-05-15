import React from "react";

const FeatureItem = ({ img, title, text }) => {
  return (
    <div className="feature-item">
      <img src={img} alt="" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeatureItem;
