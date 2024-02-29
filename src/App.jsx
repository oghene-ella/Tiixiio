import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from "./components/layout/Navbar";
import Homepage from "./pages/Home";
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp';
import Footer from './components/layout/Footer';

const App = () => {
  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/sign_up';

  return (
    <>
      {!isAuthPage && <Navbar/>}
      <div>
        <Routes>        
          <Route path="/"  element={<Homepage/>} />
          <Route path="/login"  element={<Login />}/>
          <Route path="/sign_up"  element={<SignUp />}/>
        </Routes>
      </div>
      {!isAuthPage && <Footer/>}
    </>
  );
};

export default App;
