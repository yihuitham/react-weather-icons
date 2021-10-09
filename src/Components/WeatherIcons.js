import React from "react";

function WeatherIcons({ img, conditions, time }) {
  return (
    <div className="weather">
      <img src={img} alt="" />
      <p>
        <span>conditions:</span>
        {conditions}
      </p>
      <p>
        <span>time:</span>
        {time}
      </p>
    </div>
  );
}

export default WeatherIcons;
