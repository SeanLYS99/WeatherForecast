import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import { renderIconByCode } from "../services/Icons.service";

const CitySummaries = () => {
  const { cities } = useContext(WeatherContext);

  return (
    <div>
      <h3 className="text-lg mb-4">Other large cities</h3>
      <div className="">
        <div className="space-y-3">
          {cities.map((city) => (
            <div
              key={city.name}
              className="bg-card rounded-xl p-6 flex justify-between items-center"
            >
              <div>
                <p className="text-gray text-xs uppercase">
                  {city.sys?.country}
                </p>
                <p className="mb-2 text-xl font-medium">{city.name}</p>
                <span className="text-xs capitalize opacity-[0.9]">
                  {city.weather?.[0]?.description}
                </span>
              </div>

              <div className="flex flex-col items-end">
                <img
                  src={renderIconByCode(city?.weather?.[0]?.icon)}
                  className="w-8 h-8 mb-2"
                />
                <span className="text-xl font-medium">
                  {Math.round(city.main?.temp)}°
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitySummaries;
