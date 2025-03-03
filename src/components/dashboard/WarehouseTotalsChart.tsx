import React from "react";
import { Doughnut } from "react-chartjs-2";
import { StatPerShipmentType } from "./types";
import { colorsPortfolio } from "@/helpers/helpers";
import { convertNumToCommas } from "@/helpers/helpers";

type WarehouseTotalsChartProps = {
  stats: StatPerShipmentType;
};

const WarehouseTotalsChart = (props: WarehouseTotalsChartProps) => {
  const { stats } = props;
  const data = {
    labels: ["Ship", "Flight", "Road"],
    datasets: [
      {
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
    plugins: {
      tooltip: {
        enabled: true
      },
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
        onClick: () => {},
        onHover: () => {},
        onLeave: () => {},
      },
      title: {
        display: true,
        text: "Total shipments",
      },
      // datalabels: {
      //   formatter: (value: any) => convertNumToCommas(value),
      // },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default WarehouseTotalsChart;
