import { useState, useEffect } from 'react';
import { useData, WeatherData } from '@cloudcast/home-page';
import { WeatherDetails } from '@cloudcast/weather-details';
import { SearchIcon } from '../../../../public/assets/searchIcon';

export const HomePage = () => {
  const { fetchWeatherData } = useData();
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined
  );
  const [searchQuery, setSearchQuery] = useState<string>('stockholm');
  const [cityNotFound, setCityNotFound] = useState<boolean>(false);

  const getWeatherData: () => Promise<void> = async () => {
    try {
      const data: WeatherData = await fetchWeatherData(searchQuery);
      if (data.cod === '404') {
        setCityNotFound(true);
      } else {
        setWeatherData(data);
        setCityNotFound(false);
      }
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

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
          onChange={inputHandler}
        />
        <button className='search__btn' type='submit' onClick={getWeatherData}>
          {SearchIcon}
        </button>
      </section>

      {cityNotFound ? (
        <p>Sorry there is no weather data for your search</p>
      ) : weatherData ? (
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
