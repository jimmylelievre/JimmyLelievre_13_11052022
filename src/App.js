import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
