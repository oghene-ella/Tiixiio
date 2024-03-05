import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from "./components/layout/Navbar";
import Homepage from "./pages/Home";
import Login from './pages/Log_In.jsx';
import SignUp from './pages/SignUp';
import Footer from './components/layout/Footer';
import Dashboard from "./pages/Dashboard"

const App = () => {
  const location = useLocation();

  const isAuthPage = location.pathname === '/attendees/login'  || location.pathname === '/creators/login' || location.pathname === '/attendees/sign_up' || location.pathname === '/creators/sign_up' || location.pathname === '/creators/dashboard';

  return (
    <>
      {!isAuthPage && <Navbar/>}
      <div>
        <Routes>        
          <Route path="/"  element={<Homepage/>} />
          <Route path="/creators/dashboard"  element={<Dashboard />}/>
          <Route path="/attendees/login"  element={<Login />}/>
          <Route path="/creators/login"  element={<Login />}/>
          <Route path="/attendees/sign_up"  element={<SignUp />}/>
          <Route path="/creators/sign_up"  element={<SignUp />}/>

        </Routes>
      </div>
      {!isAuthPage && <Footer/>}
    </>
  );
};

export default App;
