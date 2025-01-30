import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

type PieData = {
  type: string;
};

const PieChart = (props: PieData) => {
  const { type } = props;
  const data = {
    labels: ["Red", "Green", "Blue"],
    datasets: [
      {
        data: [20.25, 50, 29.75],
        backgroundColor: [
          "rgb(205, 51, 0)",
          "rgb(0, 204, 102)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  };

  const options = {
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
        display: true,
        text: "RGB",
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {type === "doughnut" ? (
        <Doughnut data={data} options={options} />
      ) : type === "pie" ? (
        <Pie data={data} options={options} />
      ) : null}
    </div>
  );
};

export default PieChart;
