import React from "react";
import imgBanner from "../assets/img/bank-tree.jpeg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={imgBanner} alt="" />
      <section className="banner-content">
        <p class="subtitle">No fees.</p>
        <p class="subtitle">No minimum deposit.</p>
        <p class="subtitle">High interest rates.</p>
        <p class="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};

export default Banner;
