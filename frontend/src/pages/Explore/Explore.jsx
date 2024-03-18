import { useState } from "react";
import { NavLink } from "react-router-dom"; 
import SearchTag from "@/components/ui/search";
import List from "./List";

const Explore = () => {
  const [selectedSection, setSelectedSection] = useState("/explore");

  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  return (
    <section className="bg-gray-50 flex flex-col gap-5 items-center justify-center py-10">
      <main className="w-10/12 flex flex-col gap-16 ">
        <section className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <h1 className="text-3xl font-semibold underline decoration-wavy decoration-green-400">Explore Nigeria</h1>
          <span className="w-full md:w-2/3">
            <SearchTag onSearch={handleSearch} />
          </span>
        </section>
        <section className="flex gap-8 items-center">
          <NavLink
            to="/explore"
            className={`text-lg ${selectedSection === "/explore" ? "underline decoration-double decoration-green-600" : ""}`}
            style={{ textDecorationColor: selectedSection === "/explore" ? "green" : "inherit" }}
            onClick={() => setSelectedSection("/explore")}
          >
            Regions
          </NavLink>
          <NavLink
            to="/explore"
            className={`text-lg ${selectedSection === "/explore/states" ? "underline decoration-double decoration-green-600" : ""}`}
            style={{ textDecorationColor: selectedSection === "/explore/states" ? "green" : "inherit" }}
            onClick={() => setSelectedSection("/explore/states")}
          >
            States
          </NavLink>
          <NavLink
            to="/explore"
            className={`text-lg ${selectedSection === "/explore/lgas" ? "underline decoration-double decoration-green-600" : ""}`}
            style={{ textDecorationColor: selectedSection === "/explore/lgas" ? "green" : "inherit" }}
            onClick={() => setSelectedSection("/explore/lgas")}
          >
            Local Governments
          </NavLink>
        </section>
        <List selectedSection={selectedSection} />
      </main>
    </section>
  );
};

export default Explore;
