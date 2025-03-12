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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Main() {
  return (
    <div className="p-5 flex justify-center">
      <div className="rounded bg-white text-center w-full">
        <p>Devlogs</p>
        <div className="w-full mx-auto p-3">
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
}
