import React, { useEffect, useState } from "react";
import Card from "./Card";
const API_KEY = "bd309eb97b73bb07d589bc57aa4a1858";
const celsius = "\u2103";
export default function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [region, setRegion] = useState([]);
  const [wea_ther, setWeather] = useState([]);
  const getCurrentPosition = (options) =>
    new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );

  useEffect(() => {
    const fetchData = async () => {
      const position = await getCurrentPosition();
      setLat([position.coords.latitude]);
      setLong([position.coords.longitude]);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
      );
      const result = await res.json();
      setRegion(result);
  
      setData(result.current);
      let { weather } = result.current;
      setWeather(weather[0].main);
    };
    fetchData();
  }, [lat, long]);
console.log(lat);
console.log(long);
  return (
    <div className="App">
      <div className="card">
        <h3>Current Location</h3>
        <h4>{region.timezone}</h4>
        <h3>Current Temperature</h3>
        <h4>
          {data.temp}
          {celsius}
        </h4>
        <h3>Feels Like</h3>
        <h4>
          {data.feels_like}
          {celsius}
        </h4>
        <h3>Weather</h3>
        <h4>{wea_ther}</h4>
        <Card />
      </div>
    </div>
  );
}
