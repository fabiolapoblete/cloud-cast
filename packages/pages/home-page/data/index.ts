export type WeatherData = {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
};

export const useData = () => {
  return {
    async fetchWeatherData(): Promise<WeatherData> {
      try {
        const defaultCity = 'Stockholm';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=metric&appid=${
          import.meta.env.VITE_API_SECRET_KEY
        }`;
        const response = await fetch(URL);
        const data = await response.json();
        return data as WeatherData;
      } catch (error) {
        console.error('Error fetching weather data', error);
        return {} as WeatherData;
      }
    },
  };
};
