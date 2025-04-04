import snowflake from "../../src/assets/icons/snowflake.png";
import sun from "../../src/assets/icons/sun.png";
import moon from "../../src/assets/icons/moon.png";
import cloudy_day from "../../src/assets/icons/cloudy_day.png";
import cloudy_night from "../../src/assets/icons/cloudy_night.png";
import scattered_cloud from "../../src/assets/icons/scattered_cloud.png";
import broken_clouds from "../../src/assets/icons/broken_clouds.png";
import shower_rain from "../../src/assets/icons/shower_rain.png";
import moon_rain from "../../src/assets/icons/moon_rain.png";
import sun_rain from "../../src/assets/icons/sun_rain.png";
import thunderstorm from "../../src/assets/icons/thunderstorm.png";
import mist from "../../src/assets/icons/mist.png";

export const renderIconByCode = (code) => {
  const map = {
    "01d": sun,
    "01n": moon,
    "02d": cloudy_day,
    "02n": cloudy_night,
    "03d": scattered_cloud,
    "03n": scattered_cloud,
    "04d": broken_clouds,
    "04n": broken_clouds,
    "09d": shower_rain,
    "09n": shower_rain,
    "10d": sun_rain,
    "10n": moon_rain,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snowflake,
    "13n": snowflake,
    "50d": mist,
    "50n": mist,
  };

  return map?.[code];
};
