import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import WeatherContext from "../context/WeatherContext";
import { renderIconByCode } from "../services/Icons.service";

const SearchBar = () => {
  const { setLocation, suggestions, setSelectedLocation, setSuggestions } =
    useContext(WeatherContext);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 2) {
      setLocation(value);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion.name);
    setShowSuggestions(false);
    setSelectedLocation(suggestion);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setLocation(input);
      setShowSuggestions(true);
    }
  };

  return (
    <div className="relative w-full max-w-xs">
      <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
        <div className="relative flex-1">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onFocus={() => input.length > 2 && setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Search city..."
            className="w-full shadow-lg shadow-[0_0_20px] shadow-cyan-500/30 pl-5 pr-10 text-white text-sm outline-none bg-[#252525] py-3 rounded-3xl bg-[#252525]"
          />
          <button
            type="submit"
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <FiSearch className="w-5 h-5" />
          </button>
        </div>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-[#252525] rounded-xl shadow-lg shadow-cyan-500/20 overflow-hidden">
          <ul className="py-1">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-[#3A3A3A] cursor-pointer text-white text-sm flex items-center"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <FiSearch className="mr-2 w-4 h-4 text-gray-400" />
                {`${suggestion.name}, ${suggestion.sys.country}`}
                <img
                  src={`https://flagsapi.com/${suggestion.sys.country}/flat/64.png`}
                  className="w-7 h-7 ml-2"
                />
                <div className="flex-1 flex justify-end">
                  <img
                    src={renderIconByCode(suggestion?.weather?.[0]?.icon)}
                    className="w-7 h-7"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
