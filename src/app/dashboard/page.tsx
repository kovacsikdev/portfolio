"use client";

import React, { useState } from "react";
import Image from "next/image";
import InfoIcon from "../../assets/info-icon.svg";

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

import {
  BarChart,
  HorizontalBarChart,
  LineChart,
  PieChart,
  Table,
} from "@/components/dashboard";
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

ChartJS.defaults.color = "#fff";

const Dashboard: React.FC = () => {
  const [displayDevNote, setDisplayDevNote] = useState(false);
  return (
    <>
      <div className="page-title text-4xl">
        <h2>
          Dashboards
        </h2>
        <button
            onClick={() => {
              setDisplayDevNote(true);
            }}
          >
            <Image
              style={{ margin: "0 0.5rem" }}
              src={InfoIcon}
              alt="information icon"
            />
          </button>
          {displayDevNote && (
            <DevInfo
              toggle={() => {
                setDisplayDevNote(false);
              }}
            >
              Dashboard built using React, TypeScript, Chart.js
            </DevInfo>
          )}
      </div>
      <div className="dashboard grid grid-cols-2 gap-4 grid-rows-6 md:grid-rows-2">
        <div className="dashboard-items h-[480px] col-span-2 flex justify-center items-center border border-gray-800 rounded-lg p-3">
          <BarChart />
        </div>
        <div className="dashboard-items h-auto md:h-[480px] col-span-2 row-span-4 md:col-span-1 md:row-span-1 flex justify-center items-center">
          <div className="grid grid-cols-2 grid-rows-4 md:grid-rows-2 gap-4 size-full">
            <div className="col-span-2 md:col-span-1 md:row-span-1 flex justify-center items-center border border-gray-800 rounded-lg p-3">
              <HorizontalBarChart />
            </div>
            <div className="col-span-2 md:col-span-1 md:row-span-1 flex justify-center items-center border border-gray-800 rounded-lg p-3">
              <LineChart />
            </div>
            <div className="col-span-2 md:col-span-1 md:row-span-1 flex justify-center items-center border border-gray-800 rounded-lg p-3">
              <PieChart type="pie" />
            </div>
            <div className="col-span-2 md:col-span-1 md:row-span-1 flex justify-center items-center border border-gray-800 rounded-lg p-3">
              <PieChart type="doughnut" />
            </div>
          </div>
        </div>
        <div className="dashboard-items h-[480px] col-span-2 row-span-1 md:col-span-1 md:row-span-1 flex flex-col justify-around items-center border border-gray-800 rounded-lg p-3">
          <Table />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
