import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from "./config"

import Navbar from "./components/layout/Navbar";
import Homepage from "./pages/Home";
import Login from './pages/Log_In.jsx';
import SignUp from './pages/Sign_Up';
import Footer from './components/layout/Footer';
import Dashboard from "./pages/Dashboard"
import Profile from './pages/Dashboard/Profile';
import Explore from './pages/Explore/Explore';

const App = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
  
    if (token) {
      axios.get(`${baseUrl}/auth/check-auth`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        console.log(response)
        setIsAuthenticated(response.data.isAuthenticated);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false); 
      });
    } else {
      setIsLoading(false);
    }
  }, []);
  

  const isAuthPage = location.pathname === '/login'  || location.pathname === '/sign_up' || location.pathname === '/user/dashboard/overview' || location.pathname === '/user/dashboard/profile';

  return (
    <>
      {!isAuthPage && <Navbar/>}
      <div>
        <Routes>        
          <Route path="/"  element={<Homepage/>} />
          <Route path="/explore"  element={<Explore/>} />
          <Route path="/explore/states"  element={<Explore/>} />
          <Route path="/explore/lgas"  element={<Explore/>} />
          <Route path="/user/dashboard/overview"  element={isLoading ? <div>Loading...</div> : isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/user/dashboard/profile"  element={isLoading ? <div>Loading...</div> : isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/login"  element={<Login />}/>
          <Route path="/sign_up"  element={<SignUp />}/>

        </Routes>
      </div>
      {!isAuthPage && <Footer/>}
    </>
  );
};

export default App;
