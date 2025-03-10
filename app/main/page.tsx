"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import barData from "./fakeData";
import useAuth from "@/hooks/useAuth";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Main = () => {
  const userRole = useAuth("admin");
  if (!userRole) return null;
  console.log(sessionStorage.getItem("userRole"));
  return (
    <div className="p-5 flex justify-center">
      <div className="rounded bg-white text-center w-full">
        <p>Devlogs</p>
        <div style={{ width: "100%", margin: "0 auto", height: "400px" }}>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default Main;
