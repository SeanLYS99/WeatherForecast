import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const UnitToggle = () => {
  const { unit, setUnit } = useContext(WeatherContext);

  return (
    <div className="p-0.5 bg-card flex items-center rounded-3xl overflow-hidden">
      <button
        onClick={() => setUnit("metric")}
        className={`min-w-8 p-2 text-xs ${
          unit === "metric"
            ? "bg-white text-black rounded-3xl font-bold"
            : "bg-transparent text-gray-300"
        }`}
      >
        °C
      </button>
      <button
        onClick={() => setUnit("imperial")}
        className={`min-w-8 p-2 text-xs ${
          unit === "imperial"
            ? "bg-white text-black rounded-3xl font-bold"
            : "bg-transparent text-gray-300"
        }`}
      >
        °F
      </button>
    </div>
  );
};

export default UnitToggle;
