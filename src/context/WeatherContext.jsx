import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "../services/Common.service";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({
    id: 658225,
    name: "Helsinki",
    coord: { lat: 60.1695, lon: 24.9355 },
    main: {
      temp: 6.99,
      feels_like: 3.67,
      temp_min: 5.98,
      temp_max: 8.33,
      pressure: 1023,
      humidity: 80,
      sea_level: 1023,
      grnd_level: 1021,
    },
    dt: 1743660548,
    wind: { speed: 5.36, deg: 300 },
    sys: { country: "FI" },
    rain: null,
    snow: null,
    clouds: { all: 0 },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
    ],
  });
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [cities, setCities] = useState([]);

  const fetchSuggestions = async (city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/find?q=${city}&units=${unit}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setSuggestions(res.data?.list);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const debouncedFetchSuggestions = useDebounce(fetchSuggestions, 500);

  const fetchWeather = async (city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${
          city?.coord?.lat
        }&lon=${city?.coord?.lon}&units=${unit}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setWeather(res.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const fetchMajorCities = async () => {
    const citiesData = [
      { name: "New York", country: "US" },
      { name: "Copenhagen", country: "DK" },
      { name: "Ho Chi Minh", country: "VN" },
    ];

    const responses = await Promise.all(
      citiesData.map((city) =>
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            city.name
          }&units=${unit}&appid=${import.meta.env.VITE_API_KEY}`
        )
      )
    );

    setCities(
      responses.map((res, index) => ({
        ...citiesData[index],
        ...res.data,
      }))
    );
  };

  useEffect(() => {
    if (location !== "") {
      debouncedFetchSuggestions(location);
    }
    fetchMajorCities();
  }, [location]);

  useEffect(() => {
    fetchWeather(selectedLocation);
  }, [selectedLocation, unit]);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        unit,
        setUnit,
        selectedLocation,
        setLocation,
        cities,
        suggestions,
        setSelectedLocation,
        setSuggestions,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
