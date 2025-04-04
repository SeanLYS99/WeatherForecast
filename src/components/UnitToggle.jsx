import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const UnitToggle = () => {
  const { unit, setUnit } = useContext(WeatherContext);

  return (
    <div className="ml-5 p-0.5 bg-card flex h-full items-center rounded-3xl overflow-hidden">
      <button
        onClick={() => setUnit("metric")}
        className={`min-w-10 min-h-10 p-2 text-xs ${
          unit === "metric"
            ? "bg-white text-black rounded-3xl font-bold"
            : "bg-transparent text-gray-300"
        }`}
      >
        °C
      </button>
      <button
        onClick={() => setUnit("imperial")}
        className={`min-w-10 min-h-10 p-2 text-xs ${
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
