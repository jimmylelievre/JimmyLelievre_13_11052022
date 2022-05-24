import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../feature/auth.slice";
import UserCircle from "./icons/UserCircle";
import { Navigate } from "react-router-dom";
import { useLogged } from "../components/Auth";
import { setPassword } from "../feature/user.slice";
import { setUserName } from "../feature/user.slice";
import { postLogin } from "../utils/apiRequest";

const SignInContent = () => {
  /* const [isRemember, setIsRemember] = useState(false); */

  const password = useSelector((state) => state.user.password);
  const username = useSelector((state) => state.user.username);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logged = useLogged();

  /* if (isRemember) {
    localStorage.setItem("username", username);
    localStorage.setItem("paswword", password);
  }
  const name = localStorage.getItem("username"); */

  /*   const handleOnChange = () => {
    setIsRemember(!isRemember);
  }; */

  /**
   * when the user submit, do a http post login with data then get token and stock token
   * @param {Event} e
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin(username, password)
      .then((res) => {
        dispatch(userLogin(res.data.body.token));
        localStorage.setItem("token", res.data.body.token);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
    /*  axios
      .post("http://localhost:3001/api/v1/user/login", {
        email: username,
        password: password,
      })
      .then((res) => {
        dispatch(userLogin(res.data.body.token));
        localStorage.setItem("token", res.data.body.token);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      }); */
  };
  if (logged) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className="background-content">
      <div className="sign-in-content">
        <UserCircle />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => dispatch(setUserName(e.target.value))}
              type="text"
              id="username"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => dispatch(setPassword(e.target.value))}
              type="password"
              id="password"
              required
            />
          </div>
          <div className="input-remember">
            <input
              /* checked={isRemember}
              onChange={handleOnChange} */
              type="checkbox"
              id="remember-me"
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="sign-in-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInContent;
