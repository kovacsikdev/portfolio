"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";
import { DevInfo } from "@/components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip
);
import { testForecast, testHourly, testError404 } from "./testData";
import "./WeatherApp.css"

const WeatherApp = () => {
  /**
   * Depending on what Google Places returns from a searched location
   * 
   * Coords
   * https://api.weather.gov/points/47.6,-122.33
   * -> "forecast": "https://api.weather.gov/gridpoints/SEW/125,68/forecast",
        "forecastHourly": "https://api.weather.gov/gridpoints/SEW/125,68/forecast/hourly",
        "observationStations": "https://api.weather.gov/gridpoints/SEW/125,68/stations",
   */

  /**
   * Forecast for highs and lows
   *
   * Hourly for graph and the current time within the hourly:
   * -
   * - Current temp
   * - Current humidity
   * - Current Percipitation
   * - Current wind
   *
   * Graph - Current hour to 12 hours in future
   */
  const [displayWeatherData, setDisplayWeather] = useState(false);
  const [weatherData, setWeatherData] = useState<any>({
    forecast: {},
    hourly: {},
  });
  const [currentDate, setCurrentDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDateData, setSelectedDateData] = useState({
    icon: "",
    shortForecast: "",
    temperature: 0,
    humidity: 0,
    percipitation: 0,
    wind: ""
  })

  const updateCurrentDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    setCurrentDate(now.toLocaleDateString("en-US", options));
  };

  const extractDailyData = (data: any) => {
    const dailyData: any = {};
    data.forEach((period: any) => {
      const date = new Date(period.startTime).toLocaleDateString("en-US");
      if (!dailyData[date]) {
        dailyData[date] = [];
      }
      dailyData[date].push(period);
    });
    return dailyData;
  };

  const chartData = {
    labels: ["11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"],
    datasets: [
      {
        data: [30, 35, 36, 34, 31, 29, 28, 27],
        borderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    resizeDelay: 200,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Temperature",
      },
    },
    scales: {
      x: {
        display: true,
      },
    },
  };

  useEffect(() => {
    setWeatherData({
      forecast: extractDailyData(testForecast.properties.periods),
      hourly: extractDailyData(testHourly.properties.periods),
    });
    updateCurrentDate();
  }, []);

  useEffect(() => {
    console.log("weatherData", weatherData);
    if (Object.keys(weatherData.forecast).length > 0) setSelectedDate(Object.keys(weatherData.forecast)[0])
  }, [weatherData]);

  useEffect(() => {
    if (selectedDate) {
      console.log('selectedDate', selectedDate)
      console.log('weatherData.hourly', weatherData.hourly)
      const now = new Date();
      weatherData.hourly[selectedDate].forEach((period: any) => {
        const startTime = new Date(period.startTime);
        const endTime = new Date(period.endTime);
        if (now >= startTime && now <= endTime) {
          setSelectedDateData({
            icon: period.icon,
            shortForecast: period.shortForecast,
            temperature: period.temperature,
            humidity: period.relativeHumidity.value,
            percipitation: period.probabilityOfPrecipitation.value,
            wind: period.windSpeed
          })
        }
      });
      setDisplayWeather(true);
    }
  }, [selectedDate, weatherData]);

  useEffect(() => {
    console.log('selectedDateData', selectedDateData)
  }, [selectedDateData])

  return (
    <div className="size-full flex flex-col justify-evenly items-center">
      <div className="w-full text-center">
        <input
          type="text"
          placeholder="Enter location (US only)"
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
      </div>
      {displayWeatherData ? (
        <>
          <div className="weather-date-time">{currentDate}</div>
          <div className="weather-data flex w-full justify-around">
            <div className="weather-temperature p-2 w-64 min-w-64">
              {selectedDateData && (
                <>
                  <div className="flex items-center justify-around">
                    <div className="weather-temp-icon m-2 border rounded-md">
                      {selectedDateData.icon && (
                        <Image
                          src={selectedDateData.icon.split(',')[0]}
                          alt="Weather icon"
                          width={64}
                          height={64}
                          unoptimized
                        />
                      )}
                    </div>
                    <div className="weather-temp-degrees m-2 text-6xl">{selectedDateData.temperature}°</div>
                  </div>
                  <div>
                    <ul>
                      <li className="flex justify-between m-2">
                        {selectedDateData.shortForecast}
                      </li>
                      <li className="flex justify-between m-2">
                        <div>Humidity</div>
                        <div>{selectedDateData.humidity}%</div>
                      </li>
                      <li className="flex justify-between m-2">
                        <div>Percipitation</div>
                        <div>{selectedDateData.percipitation}%</div>
                      </li>
                      <li className="flex justify-between m-2">
                        <div>Wind</div>
                        <div>{selectedDateData.wind}</div>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
            <div className="weather-graph p-2">
              <div style={{ width: "100%", height: "100%" }}>
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
          <div className="weather-forecast w-full flex justify-between overflow-y-auto">
            {Object.keys(weatherData.forecast).map((key, index) => {
              return (
                <div
                  key={`date_select_${index}`}
                  className="flex flex-col text-center m-2 min-w-16"
                >
                  <div>
                    {new Date(key).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </div>
                  <div className="border rounded-md">
                    <Image
                      className="max-w-auto"
                      src={weatherData.forecast[key][0].icon.split(",")[0]}
                      alt="Weather icon"
                      width={64}
                      height={64}
                      unoptimized
                    />
                  </div>
                  <div>
                    {weatherData.forecast[key][0].temperature}°{" "}
                    {weatherData.forecast[key][1].temperature}°
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            Data from{" "}
            <a href="https://www.weather.gov/documentation/services-web-api">
              National Weather Service
            </a>
          </div>
        </>
      ) : (
        <div>gathering weather data...</div>
      )}
    </div>
  );
};

export default WeatherApp;
