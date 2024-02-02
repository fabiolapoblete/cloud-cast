import { useData, WeatherData } from '@cloudcast/home-page';
import { WeatherDetails } from '@cloudcast/weather-details';
import { useState, useEffect } from 'react';
import { SearchIcon } from '../../../../public/assets/searchIcon';

export const HomePage = () => {
  const { fetchWeatherData } = useData();
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined
  );

  useEffect(() => {
    async function getWeatherData(): Promise<void> {
      const data: WeatherData = await fetchWeatherData();

      setWeatherData(data);
    }
    getWeatherData();
  }, []);
  return (
    <div className='home-page'>
      <header>
        <h1>CloudCast</h1>
        <img src='./cloud.png' alt='' />
      </header>

      <section className='search'>
        <input
          className='search_bar'
          type='search'
          placeholder='Search for a city'
          autoFocus
        />
        <button className='search__btn' type='submit'>
          {SearchIcon}
        </button>
      </section>

      {weatherData ? (
        <main>
          <header>
            <h2>Weather details for {weatherData.name}</h2>
          </header>
          <WeatherDetails weatherData={weatherData} />
        </main>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
