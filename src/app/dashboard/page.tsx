"use client";

import React from "react";

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

import DashboardWrapper from "@/components/dashboard/DashboardWrapper";
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
  return (
    <>
      <div className="page-title text-4xl">
        <h2>Dashboards</h2>
        <DevInfo>
          https://github.com/kovacsikdev/portfolio/blob/main/src/components/dashboard/DashboardWrapper.tsx
        </DevInfo>
      </div>
      <DashboardWrapper />
    </>
  );
};

export default Dashboard;
