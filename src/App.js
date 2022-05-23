import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Home from "./pages/Home";
import PrivateRoute from "./pages/PrivateRoute";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<PrivateRoute component={Profile} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
