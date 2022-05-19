import { useSelector } from "react-redux";

/**
 * Check if user logged
 * @returns
 */

function useLogged() {
  // Get state 'authentification' from auth.js
  const logged = useSelector((state) => state.auth.isAuthentified);
  console.log(logged);
  return logged;
}

export { useLogged };
