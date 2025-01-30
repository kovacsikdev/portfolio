import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { barChartData } from "./chartData";

const BarChart: React.FC = () => {
  const [sortOption, setSortOption] = useState("alphabetical");

  const sortedData = [...barChartData].sort((a, b) => {
    if (sortOption === "alphabetical") {
      return a.letter.localeCompare(b.letter);
    } else if (sortOption === "ascending") {
      return a.frequency - b.frequency;
    } else if (sortOption === "descending") {
      return b.frequency - a.frequency;
    }
    return 0;
  });

  const data = {
    labels: sortedData.map(d => d.letter),
    datasets: [
      {
        label: "Frequency",
        data: sortedData.map(d => d.frequency),
        backgroundColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const options = {
    responsive: true,
    resizeDelay: 200,
    maintainAspectRatio: false,
    color: "white",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Letter frequency",
      },
    }
  };

  return (
    <div style={{width: "100%", height:"100%"}}>
      <div className="chart-container" style={{position: "relative", height: "90%"}}>
        <Bar data={data} options={options} />
      </div>
      <div>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full bg-gray-800 text-white p-2 rounded"
        >
          <option value="alphabetical">Alphabetical</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default BarChart;
