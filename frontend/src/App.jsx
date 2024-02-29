import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Homepage from "../src/pages/Home";
import Footer from "./components/layout/Footer";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
