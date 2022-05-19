import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrivateRoute from "./pages/PrivateRoute";
import SignIn from "./pages/SignIn";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/user" element={<PrivateRoute component={User} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
