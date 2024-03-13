import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]); 

  const fetchData = async () => {
    try {
      const Key = "36c51d08021748ddaa2f57785caedb1e"
      const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${Key}`, {
        method: 'GET',
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data)
      setNews(data.articles);
      setFilteredNews(data.articles);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-full mx-auto flex flex-col gap-5'>
        <ul className='grid grid-cols-1 w-full lg:w-fit xl:grid-cols-2 gap-10 mx-auto mb-10' >
          {filteredNews.map(({ id, author, description, title, urlToImage, publishedAt, url }) => (
            <li key={id} className='h-fit flex items-center gap-2 rounded-md py-3 '>
              {/* cover */}
              <img src={urlToImage} alt={author} className='w-1/2 h-full' />
              {/* header & tag */}
              <section className='w-1/2 flex flex-col gap-3'>
                <span className='flex flex-col gap-2 px-3'>
                    <h2 className='text-lg font-semibold'>{title}</h2>
                </span>
                {/* description */}
                <p className='text-gray-400 text-sm px-3'>
                    {description}
                </p>

                {/* views and author */}
                <section className='flex justify-between items-center px-3'>
                    <section className='flex items-center gap-3'>
                        <img src={urlToImage} className='w-10 h-10 rounded-full' />
                        <span className='flex flex-col gap-1'>
                        <p className='text-sm font-semibold text-my-black' >{author}</p>
                        <p className='text-xs text-gray-500'>{publishedAt}</p>
                        </span>
                    </section>

                    <Link to={`${url}`} className='flex flex-col gap-5'>
                    <p className='underline text-xs text-gray-600 cursor-pointer'>View</p>
                    </Link>
                </section>
              </section>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Home;