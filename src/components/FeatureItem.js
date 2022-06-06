import React from "react";

/**
 * Show the feature item
 * @param {img} string
 * @param {title} string
 * @param {text} string
 */

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
