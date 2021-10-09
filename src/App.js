import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherIcons from "./Components/WeatherIcons";

const weatherIcons = weatherData.map((data, index) => {
  return (
    <WeatherIcons
      key={index}
      img={data.img}
      conditions={data.conditions}
      time={data.time}
    />
  );
});

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>{weatherIcons}</section>
    </div>
  );
}
