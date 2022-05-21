import { useSelector } from "react-redux";

/**
 * Check if user logged
 * @returns
 */

function useLogged() {
  const token = localStorage.getItem("token");

  // Get state 'authentification' from auth.js
  const logged = useSelector((state) => state.auth.isAuthentified);
  console.log(logged);
  console.log(token);

  return logged || token != null;
}

export { useLogged };
