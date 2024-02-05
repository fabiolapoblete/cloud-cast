import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import L from 'leaflet';

export const Map = ({
  lat,
  lon,
  name,
}: {
  lat: number;
  lon: number;
  name: string;
}) => {
  const mapRef = useRef<null | L.Map>(null);

  useEffect(() => {
    mapRef.current = L.map('map', {
      center: [lat, lon],
      zoom: 13,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }),
      ],
    });

    L.marker([lat, lon]).addTo(mapRef.current).bindPopup(`${name}`).openPopup();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [lat, lon]);

  return (
    <article
      id='map'
      style={{
        height: '20rem',
        maxWidth: '40rem',
        margin: '0 auto 2rem auto',
        border: '5px solid white',
        borderRadius: '5px',
      }}
    />
  );
};
