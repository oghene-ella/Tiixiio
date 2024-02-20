import { Route, Routes } from 'react-router-dom';

import Navbar from "./components/layout/Navbar";
import Homepage from "../src/pages/Home"

const App = () => {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>        
          <Route path="/"  element={<Homepage/>} />
          <Route path="/about"  element={<Homepage />}/>
        </Routes>
      </div>
    </>
  );
};

export default App;