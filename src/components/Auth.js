import { useSelector } from "react-redux";

function useLogged() {
  const logged = useSelector((state) => state.auth.isAuthentified);
  console.log(logged);
  return logged;
}

export { useLogged };
