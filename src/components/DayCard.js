import React from "react";
import moment from "moment";
import "../App.css";

function DayCard({ days }) {
  return (
    <>
      {days.map((day) => (
        <div key={day.dt} className="DayCard">
          <p>{`${moment.unix(day.dt).format("dddd")}`}</p>
          <img
            alt={`${day.weather[0].description}`}
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          />
          <p>{`${moment.unix(day.dt).format("MMM Do")}`}</p>
          <p>{`${Math.floor(day.temp.day)}° F`}</p>
        </div>
      ))}
    </>
  );
}

export default DayCard;
