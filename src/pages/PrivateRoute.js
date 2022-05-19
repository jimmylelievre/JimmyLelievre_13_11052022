import React from "react";
import { Navigate } from "react-router-dom";
import { useLogged } from "../components/Auth";

function PrivateRoute({ component: RouteComponent }) {
  /**
   * Boolean : Custom Hook that check if user is logged
   */
  const logged = useLogged();

  /**
   * If session / user is logged we can acces to composant else redirect to sign in page
   */
  if (logged) {
    return <RouteComponent />;
  } else {
    return <Navigate to="/sign-in" />;
  }
}

export default PrivateRoute;
