import { WeatherDetail } from '@cloudcast/weather-details';

export const WeatherCard = ({ detail, iconSrc }: WeatherDetail) => {
  return (
    <article>
      <h4>{detail}</h4>
      <img src={iconSrc} alt='Icon for weather detail' />
    </article>
  );
};
