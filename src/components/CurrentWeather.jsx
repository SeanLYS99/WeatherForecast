import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import { renderIconByCode } from "../services/Icons.service";
import wind from "../assets/icons/wind.png";
import { getTemperatureUnit } from "../services/Common.service";

const CurrentWeather = () => {
  const { weather, unit, selectedLocation } = useContext(WeatherContext);
  const current = weather?.current;

  const selectedLocationDt = new Date(current?.dt * 1000);

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="bg-card rounded-xl p-6">
      {/* Top Row - Temp + City */}
      <div className="flex justify-between items-start">
        {/* Left Side */}
        <div>
          <div className="flex items-end gap-2">
            <span
              className={`text-6xl font-medium ${
                selectedLocation?.name?.length >= 8
                  ? "text-6xl lg:text-4xl xl:text-6xl"
                  : "text-6xl"
              }
            }`}
            >
              {Math.round(current?.temp)}°
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-right">
          <div className="flex flex-row justify-end ml-5">
            <span
              className={`flex h-full self-center font-medium items-center ${
                selectedLocation?.name?.length >= 8
                  ? "text-2xl md:text-2xl lg:text-[18px] xl:text-2xl"
                  : "xl:text-2xl text-xl"
              }`}
            >
              <img
                src={`https://flagsapi.com/${selectedLocation?.sys?.country}/flat/64.png`}
                className="w-8 h-8 mr-1 self-start"
              />
              {selectedLocation?.name}
            </span>
          </div>
          <div className="flex justify-end">
            <p className="text-sm">
              {`${new Date().toLocaleDateString("en-US", {
                weekday: "short",
              })},`}
            </p>
            &nbsp;
            <p className="text-sm">{month[selectedLocationDt.getMonth()]}</p>
            &nbsp;
            <p className="text-sm">{`${selectedLocationDt.getDate()},`}</p>
            &nbsp;
            <p className="text-sm">
              {selectedLocationDt.toLocaleString("en-US", {
                timeZone: weather?.timezone,
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-3 items-center">
        <div className="flex flex-row items-center">
          <img
            src={renderIconByCode(current?.weather?.[0]?.icon)}
            className="w-8 h-8 mr-3"
          />
          <p className="text-sm capitalize text-gray ">
            {current?.weather?.[0]?.main}
          </p>
        </div>
        <div className="flex justify-end">
          <img src={wind} className="w-6 h-6 mr-3" title="Wind speed" />
          <p className="font-medium text-right text-md">
            {current?.wind_speed} m/s
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-3 items-center">
        <p className="text-xs capitalize text-gray">
          {`Feel like: ${Math.round(current?.feels_like)}°${getTemperatureUnit(
            unit
          )}`}
        </p>
        <p className="text-xs text-right text-gray">
          {`${Math.round(weather?.daily?.[0]?.temp?.min)}° to ${Math.round(
            weather?.daily?.[0]?.temp?.max
          )}°`}
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
