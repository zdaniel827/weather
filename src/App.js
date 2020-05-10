import React from "react";
import "./App.css";
import TodaysWeather from "./components/TodaysWeather";

function App() {
  return (
    <div className="App">
      <header className="App-header">Weather App</header>
      <TodaysWeather />
    </div>
  );
}

export default App;
