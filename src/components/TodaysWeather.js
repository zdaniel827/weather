import React, { useState, useEffect } from "react";
import DayCard from "./DayCard";
import "../App.css";

function TodaysWeather() {
  const [dailyWeather, setDailyWeather] = useState([]);
  useEffect(() => {
    const weatherAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=34.265570&lon=-118.899550&exclude=current&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`;
    fetch(weatherAPI)
      .then((res) => res.json())
      .then((data) => setDailyWeather(data.daily));
  }, []);

  return (
    <section className="WeeksWeather">
      <DayCard days={dailyWeather} />
    </section>
  );
}

export default TodaysWeather;
