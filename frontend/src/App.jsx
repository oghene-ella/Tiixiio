import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from "./config"

import Homepage from "./pages/Home";
import Login from './pages/Log_In.jsx';
import SignUp from './pages/Sign_Up';
import Dashboard from "./pages/Dashboard"
import Explore from './pages/Explore/Explore';
import { AuthProvider } from './context/authContext';

// Bringing it in here
import PrivateRoute from './components/PrivateRoute';

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
  

  //const isAuthPage = location.pathname === '/login'  || location.pathname === '/sign_up' || location.pathname === '/user/dashboard/overview' || location.pathname === '/user/dashboard/profile';

  return (
    <>
      {/* {!isAuthPage && <Navbar/>} */}
      <AuthProvider>
        <div>
          <Routes>        
            <Route path="/"  element={<Homepage/>} />
            <Route path="/explore"  element={<Explore/>} />
            <Route path="/explore/states"  element={<Explore/>} />
            <Route path="/explore/lgas"  element={<Explore/>} />
            {/* That way, if you go to this route, it will do that check if it is logged in, it will go the route but if it is not it will go the log in page */}
            <Route path="/user/dashboard/overview" element={<PrivateRoute/>}>
              <Route path="/user/dashboard/overview"  element={<Dashboard />} />
            </Route>
            <Route path="/user/dashboard/profile"  element={<Dashboard/>} />
            <Route path="/login"  element={<Login />}/>
            <Route path="/sign_up"  element={<SignUp />}/>
          </Routes>
        </div>
      </AuthProvider>
      {/* {!isAuthPage && <Footer/>} */}
    </>
  );
};

export default App;
