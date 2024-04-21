import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SearchTag from "@/components/ui/search";
import axios from 'axios';
import Spinner from "@/components/ui/Spinner";


const Explore = () => {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [originalData, setOriginalData] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      const sortedData = response.data.sort((a, b) => a.name.localeCompare(b.name));
      setData(sortedData);
      setOriginalData(sortedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = async (query) => {
    if (!originalData) {
      console.error("Original data is not defined");
      return;
    }
  
    try {
      let searchEndpoint = "";
      switch (location.pathname) {
        case "/explore":
          searchEndpoint = `https://tiixiio.onrender.com/search?query=${query}`;
          break;
        case "/explore/states":
          searchEndpoint = `https://tiixiio.onrender.com/search?query=${query}`;
          break;
        case "/explore/lgas":
          searchEndpoint = `https://tiixiio.onrender.com/search?query=${query}`;
          break;
        default:
          console.error("Invalid location pathname");
          return;
      }
  
      const response = await axios.get(searchEndpoint);
      let searchData = [];

      switch (location.pathname) {
        case "/explore":
          searchData = response.data.regions || [];
          break;
        case "/explore/states":
          searchData = response.data.states || [];
          break;
        case "/explore/lgas":
          searchData = response.data.lgas || [];
          break;
        default:
          console.error("Invalid location pathname");
          return;
      }

      setData(searchData);
    } catch (error) {
      console.error('Error searching:', error);
      setData([]);
    }
  };
  
  

  const getFirst100Words = (str) => {
    const words = str.split(' ');
    return words.slice(0, 50).join(' ');
  };
  

  useEffect(() => {
    const url = location.pathname === '/explore' ? 'https://tiixiio.onrender.com/regions' : 
      location.pathname === '/explore/states' ? 'https://tiixiio.onrender.com/states' :
      location.pathname === '/explore/lgas' ? 'https://tiixiio.onrender.com/lgas' : '';
    
    if (url) {
      fetchData(url);
    }
  }, [location]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="bg-gray-50 flex flex-col gap-5 items-center justify-center py-10">
      <main className="w-10/12 flex flex-col gap-16">
        {/* Search Section */}
        <section className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <h1 className="text-3xl font-semibold underline decoration-wavy decoration-green-400">Explore Nigeria</h1>
          <span className="w-full md:w-2/3">
            <SearchTag onSearch={handleSearch} />
          </span>
        </section>

        {/* Navigation Links */}
        <section className="flex gap-8 items-center">
          <NavLink
            to="/explore"
            className={`text-lg ${location.pathname === "/explore" ? "underline decoration-double decoration-green-600" : ""}`}
            style={{ textDecorationColor: location.pathname === "/explore" ? "green" : "inherit" }}
          >
            Regions
          </NavLink>
          <NavLink
            to="/explore/states"
            className={`text-lg ${location.pathname === "/explore/states" ? "underline decoration-double decoration-green-600" : ""}`}
            style={{ textDecorationColor: location.pathname === "/explore/states" ? "green" : "inherit" }}
          >
            States
          </NavLink>
          <NavLink
            to="/explore/lgas"
            className={`text-lg ${location.pathname === "/explore/lgas" ? "underline decoration-double decoration-green-600" : ""}`}
            style={{ textDecorationColor: location.pathname === "/explore/lgas" ? "green" : "inherit" }}
          >
            Local Governments
          </NavLink>
        </section>
  
        {/* Display Fetched Data or Search Results */}
        <div className='w-full mx-auto flex flex-col gap-5'>
          <ul className='grid grid-cols-1 w-full lg:w-fit xl:grid-cols-2 gap-20 mx-auto mb-10' >
            {(data && data.length > 0) ? (
              data.map(({ id, description, name, img, url, states, touristsAttractions }) => (
                <li key={id} className='w-full md:w-fit h-fit flex flex-col md:flex-row items-center gap-2 rounded-md py-3 border border-gray-200 drop-shadow-sm md:drop-shadow-none md:border-none'>
                  <img src={img} alt={id} className='w-full md:w-7/12 h-full' />
                  <section className='w-full md:w-1/2 flex flex-col gap-3'>
                    <span className='flex flex-col gap-2 px-3'>
                      <h2 className='text-lg font-semibold text-center md:text-start'>{name}</h2>
                    </span>
                    <p className='text-gray-400 text-sm px-3 text-wrap text-justify md:text-start'>
                      {getFirst100Words(description)}...
                    </p>
                    <section className='flex flex-col justify-between items-start px-3 gap-3'>
                      <section className='flex items-center gap-3'>
                        <span className='flex md:flex-wrap gap-1 items-center'>
                          {states && states.length > 0 ? (
                            states.map((state, index) => (
                              <p className='text-sm font-light text-my-black w-fit' key={index}>{`${state},`}</p>
                            ))
                          ) : (
                            touristsAttractions.map((attraction, index) => (
                              <p className='text-sm font-light text-my-black w-fit' key={index}>{`${attraction},`}</p>
                            ))
                          )}
                        </span>
                      </section>
                      <NavLink to={`${url}`} className='flex flex-col gap-5'>
                        <p className='underline text-xs text-gray-600 cursor-pointer'>View</p>
                      </NavLink>
                    </section>
                  </section>
                </li>
              ))
            ) : (
              <li className="text-center text-gray-500 py-4">No results found</li>
            )}
          </ul>
        </div>
      </main>

    </section>
  );
};

export default Explore;
