import { WeatherProvider } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import FiveDayForecast from "./components/FiveDayForecast";
import CitySummaries from "./components/CitySummaries";
import UnitToggle from "./components/UnitToggle";
import { useSyncHeight } from "./useSyncHeight";

function App() {
  useSyncHeight("current-weather", "current-height");

  return (
    <WeatherProvider>
      {/* Dark Theme Container */}
      <div className="min-h-screen bg-gradient-to-br bg-purple-gradient text-white p-4 md:p-8">
        {/* Content Container */}
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <header className="mb-8 flex flex-1 md:flex-row gap-4 justify-between items-start md:items-center">
            <SearchBar />
            <div className="flex-1 flex justify-end">
              <UnitToggle />
            </div>
          </header>

          {/* Mobile/Tablet: Vertical Stack */}
          <div className="flex flex-col gap-6 lg:hidden">
            <CurrentWeather />
            <HourlyForecast />
            <CitySummaries />
            <FiveDayForecast />
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <div id="current-weather">
                <CurrentWeather />
              </div>
              <CitySummaries />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-8">
              <HourlyForecast className="min-h-[var(--current-height)] h-full" />
              <FiveDayForecast />
            </div>
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
