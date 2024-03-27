import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; 
import SearchTag from "@/components/ui/search";
import axios from 'axios';

const Explore = () => {
  const [selectedSection, setSelectedSection] = useState("/explore");
  const [data, setData] = useState(null);

  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data)
      console.log(setData(response.data))
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getFirst100Words = (str) => {
    const words = str.split(' ');
    return words.slice(0, 100).join(' ');
  };

  useEffect(() => {
    if (selectedSection === "/explore") {
      //const Key = "36c51d08021748ddaa2f57785caedb1e"
      //fetchData(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${Key}`);
      fetchData(`https://tiixiio.onrender.com/regions`)
    } else if (selectedSection === "/explore/states") {
      fetchData(`https://tiixiio.onrender.com/states`)
      //const Key = "36c51d08021748ddaa2f57785caedb1e"
      //fetchData(`https://newsapi.org/v2/everything?q=tesla&from=2024-02-27&sortBy=publishedAt&apiKey=${Key}`);
    } else if (selectedSection === "/explore/lgas") {
      //fetchData(`https://tiixiio.onrender.com/regions`)
      //const Key = "36c51d08021748ddaa2f57785caedb1e"
      //fetchData(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${Key}`);
    }
  }, [selectedSection]);

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
            to="/explore/states"
            className={`text-lg ${selectedSection === "/explore/states" ? "underline decoration-double decoration-green-600" : ""}`}
            style={{ textDecorationColor: selectedSection === "/explore/states" ? "green" : "inherit" }}
            onClick={() => setSelectedSection("/explore/states")}
          >
            States
          </NavLink>
          <NavLink
            to="/explore/lgas"
            className={`text-lg ${selectedSection === "/explore/lgas" ? "underline decoration-double decoration-green-600" : ""}`}
            style={{ textDecorationColor: selectedSection === "/explore/lgas" ? "green" : "inherit" }}
            onClick={() => setSelectedSection("/explore/lgas")}
          >
            Local Governments
          </NavLink>
        </section>
        
        <div className='w-full mx-auto flex flex-col gap-5'>
          <ul className='grid grid-cols-1 w-full lg:w-fit xl:grid-cols-2 gap-10 mx-auto mb-10' >
            {data && data.map(({ id, description, name, img, url }) => (
              <li key={id} className='h-fit flex items-center gap-2 rounded-md py-3 '>
                <img src={img} alt={id} className='w-1/2 h-full' />
                <section className='w-1/2 flex flex-col gap-3'>
                  <span className='flex flex-col gap-2 px-3'>
                    <h2 className='text-lg font-semibold'>{name}</h2>
                  </span>
                  <p className='text-gray-400 text-sm px-3'>
                    {getFirst100Words(description)}...
                  </p>
                  <section className='flex justify-between items-center px-3'>
                    <section className='flex items-center gap-3'>
                        <span className='flex gap-1 items-center'>
                          <p className="text-sm font-semibold">States: </p>
                        {data[0].states.map((state, index) => (
                          <p className='text-sm font-light text-my-black' key={index}>{state}</p>
                        ))}
                        </span>
                    </section>
                    <NavLink to={`${url}`} className='flex flex-col gap-5'>
                      <p className='underline text-xs text-gray-600 cursor-pointer'>View</p>
                    </NavLink>
                  </section>
                </section>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
};

export default Explore;
