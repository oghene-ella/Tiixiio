import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from "./components/layout/Navbar";
import Homepage from "./pages/Home";
import Login from './pages/Log_In.jsx';
import SignUp from './pages/Sign_Up';
import Footer from './components/layout/Footer';
import Dashboard from "./pages/Dashboard"
import Explore from './pages/Explore/Explore';

const App = () => {
  const location = useLocation();

  const isAuthPage = location.pathname === '/login'  || location.pathname === '/sign_up' || location.pathname === '/dashboard';

  return (
    <>
      {!isAuthPage && <Navbar/>}
      <div>
        <Routes>        
          <Route path="/"  element={<Homepage/>} />
          <Route path="/explore"  element={<Explore/>} />
          <Route path="/dashboard"  element={<Dashboard />}/>
          <Route path="/login"  element={<Login />}/>
          <Route path="/sign_up"  element={<SignUp />}/>

        </Routes>
      </div>
      {!isAuthPage && <Footer/>}
    </>
  );
};

export default App;
