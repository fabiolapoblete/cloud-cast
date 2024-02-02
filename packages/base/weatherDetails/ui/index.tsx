import { WeatherCard } from '@cloudcast/weather-card';
import { WeatherData } from '@cloudcast/home-page';

export type WeatherDetail = {
  detail: string | number;
  iconSrc: string;
};

export const WeatherDetails = ({
  weatherData,
}: {
  weatherData: WeatherData;
}) => {
  //   const weatherDetails: (string | number)[] = [
  //     Math.round(weatherData.main.temp_max),
  //     Math.round(weatherData.main.temp_min),
  //     Math.round(weatherData.wind.speed),
  //     weatherData.main.humidity,
  //     weatherData.main.pressure,
  //     weatherData.weather[0].description,
  //   ];

  const weatherDetails: WeatherDetail[] = [
    {
      detail: Math.round(weatherData.main.temp_max),
      iconSrc: './assets/hot.png',
    },
    {
      detail: Math.round(weatherData.main.temp_min),
      iconSrc: './assets/cold.png',
    },
    {
      detail: Math.round(weatherData.wind.speed),
      iconSrc: './assets/wind.png',
    },
    {
      detail: weatherData.main.humidity,
      iconSrc: './assets/humidity.png',
    },
    {
      detail: weatherData.main.pressure,
      iconSrc: './assets/barometer.png',
    },
    {
      detail: weatherData.weather[0].description,
      iconSrc: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
    },
  ];

  return (
    <section>
      <h1>Weather details section</h1>
      {weatherDetails &&
        weatherDetails.map((detailObj, index) => (
          <WeatherCard
            key={index}
            detail={detailObj.detail}
            iconSrc={detailObj.iconSrc}
          />
        ))}
    </section>
  );
};
