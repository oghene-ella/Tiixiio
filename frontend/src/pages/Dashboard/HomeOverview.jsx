import Sidebar, { SidebarItem } from "@/components/ui/sidebar";
import { UserRound, Home, Ticket, BookA } from "lucide-react";

const HomeOverview = () => {
  return (
    <section className="border border-red-500 w-full h-fit">
        <Sidebar >
            <SidebarItem icon={<Home size={20} color="#5b51cf" />}
            text="Overview"
            alert
            />
            <SidebarItem icon={<Ticket size={20} color="#5b51cf" />}
            text="Tickets"
            alert
            />
            <SidebarItem icon={<BookA size={20} color="#5b51cf" />}
            text="Bookings"
            alert
            />
            <SidebarItem icon={<UserRound color="#5b51cf" size={20} />}
            text="Profile"
            alert
            />
        </Sidebar>
        <h1>Hello</h1>
    </section>
  )
}

export default HomeOverview;