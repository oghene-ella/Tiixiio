const ApiOverviewComponent = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Tiixiio API</h2>
      <p className="text-gray-700 mb-2">
      Before I give an overview, for you to be here, it shows that you are a developer! Well, Tiixiio is a developer tool for anyone who needs to know Nigeria, geographically at least. Locale’s API shows you all of Nigeria’s regions, states, and local government areas(LGAs). Locale is looking to be a very useful tool for the thousands of businesses building for Nigeria’s 200M+ population size.
      </p>
      <p className="text-gray-700 mb-2 flex gap-4">
        Base Url:  
        <a href="https://tiixiio.onrender.com/" className="text-blue-500">https://tiixiio.onrender.com/ </a>
      </p>
      <p className="text-gray-700 mb-2">
        With React, developers can easily fetch data from APIs using the
        built-in fetch API or popular libraries like Axios. Once the data is
        fetched, it can be displayed in the user interface. Enjoy!
      </p>
    </div>
  );
};

export default ApiOverviewComponent;
