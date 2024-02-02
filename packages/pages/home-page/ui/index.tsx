import { useData, WeatherData } from '@cloudcast/home-page';
import { useState, useEffect } from 'react';

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
      <header></header>
    </div>
  );
};

// {weatherData ? (
//   // Render your weather data here
//   <p>{weatherData.name}</p>
// ) : (
//   // Render a loading state or handle the case when data is not yet available
//   <p>Loading...</p>
// )}
