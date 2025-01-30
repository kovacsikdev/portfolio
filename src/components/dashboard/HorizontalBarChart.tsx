import React from "react";
import { Bar } from "react-chartjs-2";
import { horizontalBarChartData } from "./chartData";

const HorizontalBarChart: React.FC = () => {
  const options = {
    indexAxis: "y" as const,
    responsive: true,
    resizeDelay: 200,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded"
        }
      },
      title: {
        display: false
      },
    },
  };

  return (
    <div style={{width: "100%", height:"100%"}}>
        <Bar data={{...horizontalBarChartData}} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
