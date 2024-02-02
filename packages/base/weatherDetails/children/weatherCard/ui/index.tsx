import './style.scss';
import { WeatherDetail } from '@cloudcast/weather-details';

export const WeatherCard = ({
  header,
  detail,
  unit,
  iconSrc,
}: WeatherDetail) => {
  return (
    <article className='weatherCard'>
      <img className='image' src={iconSrc} alt='Icon for weather detail' />
      <h4 className='card-header'>{header}</h4>
      <h3 className='card-detail'>
        {detail}
        {unit}
      </h3>
    </article>
  );
};
