import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import { renderIconByCode } from "../services/Icons.service";

const FiveDayForecast = () => {
  const { weather } = useContext(WeatherContext);

  // Get the next 5 days (excluding today)
  const getNextFiveDaysForecast = () => {
    if (!weather?.daily) return [];
    const forecasts = [];
    const seenDays = new Set();
    const today = new Date().getDate();
    // Skip today's forecasts
    for (const forecast of weather.daily) {
      const forecastDate = new Date(forecast.dt * 1000);
      const forecastDay = forecastDate.getDate();
      // Only include one forecast per day (using noon data if available)
      if (forecastDay !== today && !seenDays.has(forecastDay)) {
        seenDays.add(forecastDay);
        forecasts.push(forecast);
        // Stop when we have 5 days
        if (forecasts.length === 5) break;
      }
    }
    return forecasts;
  };
  const dailyForecasts = getNextFiveDaysForecast();

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">5-day forecast</h3>

      <div className="">
        <div className="space-y-4">
          {dailyForecasts.map((day) => {
            const date = new Date(day.dt * 1000);
            const weekday = date.toLocaleDateString("en-US", {
              weekday: "short",
            });
            const tempPercentage = Math.min(
              100,
              ((day?.temp.day - day.temp.min) / (day.temp.max - day.temp.min)) *
                100
            );

            return (
              <div
                key={day.dt}
                className="bg-card rounded-xl py-3 px-5 flex flex-1"
              >
                <div className="flex-[0.5] flex">
                  <span className="flex items-center flex-1">{weekday}</span>
                  <div className="flex flex-1">
                    <img
                      src={renderIconByCode(day.weather[0].icon)}
                      className="w-6 h-6"
                    />
                    <span className="text-gray font-medium flex items-center ml-1 text-[10px] text-gray-400 text-medium">
                      {day.weather[0].main}
                    </span>
                  </div>
                </div>
                {/* Temperature Progress Bar */}
                <div className="flex flex-1 col-span-2">
                  <div className="flex flex-1 items-center justify-between gap-2">
                    {/* Min Temp */}
                    <span className="text-sm text-gray-400 w-8 text-right">
                      {Math.round(day.temp.min)}°
                    </span>
                    {/* Progress Bar */}
                    <div className="flex flex-1 h-2 bg-black rounded-full overflow-hidden">
                      <div
                        className="h-full  bg-blue-500 rounded-full"
                        style={{ width: `${tempPercentage}%` }}
                      />
                    </div>
                    {/* Max Temp */}
                    <span className="text-sm text-gray-400 w-8 text-left">
                      {Math.round(day.temp.max)}°
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default FiveDayForecast;
