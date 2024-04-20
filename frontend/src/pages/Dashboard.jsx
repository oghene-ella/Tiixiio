import Sidebar, { SidebarItem } from "@/components/ui/sidebar";
import { useLocation } from 'react-router-dom';
import Overview from './Dashboard/HomeOverview';
import Profile from './Dashboard/Profile';
import { UserRound, Home } from "lucide-react";

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="flex bg-custom_dashboard">
      <Sidebar>
        <SidebarItem icon={<Home />} text="Overview" to="/user/dashboard/overview" />
        <SidebarItem icon={<UserRound />} text="Profile" to="/user/dashboard/profile" />
      </Sidebar>
      <div className="flex-1 overflow-y-auto">
        {location.pathname === '/user/dashboard/overview' && <Overview />}
        {location.pathname === '/user/dashboard/profile' && <Profile />}
      </div>
    </div>
  );
};

export default Dashboard;
