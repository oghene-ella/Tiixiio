import Sidebar, { SidebarItem } from "@/components/ui/sidebar";
import { UserRound, Home } from "lucide-react";

const HomeOverview = () => {
  return (
    <section className="w-full h-fit flex">
      <Sidebar >
        <SidebarItem icon={<Home size={20} color="#5b51cf" />} text="Overview" alert to="/user/dashboard/overview" />
        <SidebarItem icon={<UserRound color="#5b51cf" size={20} />} text="Profile" alert to="/user/dashboard/profile" />
      </Sidebar>

      <h1>Overview</h1>
      <p>ApiKey: </p>
    </section>
  )
}

export default HomeOverview;
