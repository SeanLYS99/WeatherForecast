import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import { renderIconByCode } from "../services/Icons.service";

const HourlyForecast = ({ className }) => {
  const { weather } = useContext(WeatherContext);

  let i = 0;

  const hourlyData = weather?.hourly?.reduce((acc, curr, index) => {
    if (i >= 8) {
      return acc;
    } else if (index % 3 === 0) {
      i++;
      acc = acc.concat(curr);
    }
    return acc;
  }, []);

  return (
    <div>
      <div className={`rounded-xl overflow-auto ${className}`}>
        {/* Responsive Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
          {hourlyData?.map((hour) => (
            <div
              key={hour.dt}
              className={`flex flex-col bg-card rounded-xl px-2 py-4 text-center ${className}`}
            >
              <p
                className="
                 xl:text-sm text-sm sm:text-[11px] text-gray-300
              "
              >
                {new Date(hour.dt * 1000).toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </p>
              <div className="border w-full border-[0.5px] mt-2 border-gray-700" />
              <div className="flex-1 content-center my-3">
                <img
                  src={renderIconByCode(hour.weather[0].icon)}
                  className="w-8 h-8 mx-auto"
                />
                <p className="text-[10px] text-gray mt-2">
                  {hour.weather[0].main}
                </p>
              </div>
              <p className="font-medium text-2xl">{Math.round(hour.temp)}°</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
