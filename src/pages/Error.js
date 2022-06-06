import React from "react";
import Header from "../components/Header";

/**
 * Show the error page
 */

const Error = () => {
  return (
    <div>
      <Header />
      <div className="error">
        <h1>Erreur 404</h1>
      </div>
    </div>
  );
};

export default Error;
