"use client";

import { DevInfo } from "@/components";
import WeatherApp from "@/components/weatherapp/WeatherApp";

import "./page.css";

const Weather = () => {
  return (
    <>
      <div className="page-title text-4xl">
        <h2>Weather</h2>
        <DevInfo>Weather stuff</DevInfo>
      </div>
      <div className="max-w-4xl m-auto my-6 p-2 border border-gray-300 rounded-md">
        <WeatherApp />
      </div>
    </>
  );
};

export default Weather;
