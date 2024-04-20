import { useState } from "react";
import { Button } from "./button"; 

const SearchTag = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Enter search query"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="rounded-l-md border-gray-200 focus:ring-gray-300 focus:border-gray-300 flex-1 block w-full sm:text-sm border px-4 py-4"
      />
      <Button variant="default" size="default" onClick={handleSearch} className="rounded-r-md">
        Search
      </Button>
    </div>
  );
};

export default SearchTag;
