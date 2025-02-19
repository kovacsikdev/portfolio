import React from "react";
import { Pie } from "react-chartjs-2";
import { StatReachedPerShipmentType } from "./types";
import { colorsPortfolio } from "@/helpers/helpers";

type WarehouseReachedChartProps = {
  stats: StatReachedPerShipmentType;
};

const WarehouseReachedChart = (props: WarehouseReachedChartProps) => {
  const { stats } = props;
  const shipData = {
    labels: ["No", "Yes"],
    datasets: [
      {
        data: [stats.Ship["0"], stats.Ship["1"]],
        backgroundColor: [colorsPortfolio.c_6, colorsPortfolio.c_10],
      },
    ],
  };
  const flightData = {
    labels: ["No", "Yes"],
    datasets: [
      {
        data: [stats.Flight["0"], stats.Flight["1"]],
        backgroundColor: [colorsPortfolio.c_6, colorsPortfolio.c_10],
      },
    ],
  };
  const roadData = {
    labels: ["No", "Yes"],
    datasets: [
      {
        data: [stats.Road["0"], stats.Road["1"]],
        backgroundColor: [colorsPortfolio.c_6, colorsPortfolio.c_10],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    resizeDelay: 200,
    maintainAspectRatio: false,
    plugins: {
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
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }} className="flex">
      <div style={{ width: "33%", height: "100%" }}>
        <Pie
          data={shipData}
          options={{
            ...chartOptions,
            plugins: {
              ...chartOptions.plugins,
              title: { display: true, text: "Ship" },
            },
          }}
        />
      </div>
      <div style={{ width: "33%", height: "100%" }}>
        <Pie
          data={flightData}
          options={{
            ...chartOptions,
            plugins: {
              ...chartOptions.plugins,
              title: { display: true, text: "Flight" },
            },
          }}
        />
      </div>
      <div style={{ width: "33%", height: "100%" }}>
        <Pie
          data={roadData}
          options={{
            ...chartOptions,
            plugins: {
              ...chartOptions.plugins,
              title: { display: true, text: "Road" },
            },
          }}
        />
      </div>
    </div>
  );
};

export default WarehouseReachedChart;
