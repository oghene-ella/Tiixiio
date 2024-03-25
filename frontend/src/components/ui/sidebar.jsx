import { LogOut, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState, useEffect } from "react"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from "../../config"
import { Link, useLocation } from 'react-router-dom';


const SidebarContext = createContext()

// eslint-disable-next-line react/prop-types
export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)
  const [userDetails, setUserDetails] = useState(null);

  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.get(`${baseUrl}/auth/logout`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      localStorage.removeItem('token');

      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`${baseUrl}/user/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        setUserDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchUserDetails();
  }, []);  

  return (
    <aside className="w-fit h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <span className="flex gap-3 items-center">
            <img
              src="/logo.png"
              className={`${
                expanded ? "w-14" : "w-0"
              }`}
              alt=""
            />
            <p className={`text-header_black text-lg font-semibold overflow-hidden transition-all ${
                expanded ? "w-14" : "w-0"
              }`}>Tiixiio</p>
          </span>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{userDetails?.name}</h4>
              <span className="text-xs text-gray-600">{userDetails?.email}</span>
            </div>
            <button onClick={logout}>
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  )
}

// eslint-disable-next-line react/prop-types
export function SidebarItem({ icon, text, to }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          isActive
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      <Link to={to} className="flex items-center">
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}

