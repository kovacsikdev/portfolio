import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const LineChart: React.FC = () => {

  const getRandomInt = (max: number) => Math.floor(Math.random() * max);
  const [array, setArray] = useState<number[]>(
    Array.from({ length: 5 }, () => getRandomInt(100))
  );

  const data = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        data: array,
        borderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const options = {
    responsive: true,
    resizeDelay: 200,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "5 second interval",
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        min: 0, max: 100
      }
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setArray((prevArray) => {
        const newArray = [...prevArray.slice(1), getRandomInt(100)];
        return newArray;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
