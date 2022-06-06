import React from "react";
import imgBanner from "../assets/img/bank-tree.jpeg";

/**
 * Show the banner
 * @returns
 */

const Banner = () => {
  return (
    <div className="banner">
      <img src={imgBanner} alt="" />
      <section className="banner-content">
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};

export default Banner;
