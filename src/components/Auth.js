import { useSelector } from "react-redux";

/**
 * Custom hook check if user isLogged, check if user logged
 * @returns
 */

function useLogged() {
  const token = localStorage.getItem("token");

  // Get state 'authentification' from auth.js
  const logged = useSelector((state) => state.auth.isAuthentified);

  return logged || token != null;
}

export { useLogged };
