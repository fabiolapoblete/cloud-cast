import './style.scss';
import { WeatherCard } from '@cloudcast/weather-card';
import { WeatherData } from '@cloudcast/home-page';

export type WeatherDetail = {
  header: string;
  detail: string | number;
  unit?: string;
  iconSrc: string;
};

export const WeatherDetails = ({
  weatherData,
}: {
  weatherData: WeatherData;
}) => {
  const weatherDetails: WeatherDetail[] = [
    {
      header: 'Max Temperature',
      detail: Math.round(weatherData.main.temp_max),
      unit: ' °C',
      iconSrc: './assets/hot.png',
    },
    {
      header: 'Min Temperature',
      detail: Math.round(weatherData.main.temp_min),
      unit: ' °C',
      iconSrc: './assets/cold.png',
    },
    {
      header: 'Wind',
      detail: Math.round(weatherData.wind.speed),
      unit: 'm/s',
      iconSrc: './assets/wind.png',
    },
    {
      header: 'Humidity',
      detail: weatherData.main.humidity,
      unit: '%',
      iconSrc: './assets/humidity.png',
    },
    {
      header: 'Pressure',
      detail: weatherData.main.pressure,
      unit: 'hpa',
      iconSrc: './assets/barometer.png',
    },
    {
      header: 'Visibility',
      detail: weatherData.weather[0].description,
      iconSrc: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
    },
  ];

  return (
    <section className='weatherDetails'>
      {weatherDetails &&
        weatherDetails.map((detailObj, index) => (
          <WeatherCard
            key={index}
            header={detailObj.header}
            detail={detailObj.detail}
            unit={detailObj.unit}
            iconSrc={detailObj.iconSrc}
          />
        ))}
    </section>
  );
};
