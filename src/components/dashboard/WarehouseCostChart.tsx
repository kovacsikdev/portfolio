import React from "react";
import { Bar } from "react-chartjs-2";
import { StatPerShipmentType } from "./types";
import { colorsPortfolio } from "@/helpers/helpers";
import { convertNumToCommas } from "@/helpers/helpers";

type WarehouseCostChartProps = {
  stats: StatPerShipmentType;
};

const WarehouseCostChart = (props: WarehouseCostChartProps) => {
  const { stats } = props;
  const data = {
    labels: ["Ship", "Flight", "Road"],
    datasets: [
      {
        label: "Frequency",
        data: [stats.Ship, stats.Flight, stats.Road],
        backgroundColor: [
          colorsPortfolio.c_7,
          colorsPortfolio.c_8,
          colorsPortfolio.c_9,
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    resizeDelay: 200,
    maintainAspectRatio: false,
    color: "white",
    plugins: {
      tooltip: {
        enabled: true
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Cost per shipment",
      },
      // datalabels: {
      //   formatter: (value: any) => {
      //     return `$${convertNumToCommas(value)}`;
      //   },
      // },
    },
  };

  return (
    <div style={{ width: "50%", height: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default WarehouseCostChart;
