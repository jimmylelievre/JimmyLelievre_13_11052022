import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Home from "./pages/Home";
import PrivateRoute from "./pages/PrivateRoute";
import SignIn from "./pages/SignIn";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/profile" element={<PrivateRoute component={User} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
