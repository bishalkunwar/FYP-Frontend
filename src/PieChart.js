import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ result }) => {
  const datasets = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        label: "# of Votes",
        data: [result.pos, result.neg, result.neu],
        backgroundColor: [
          "rgb(230, 9, 101)",
          "rgb(249, 72, 146)",
          "rgb(255, 161, 201)",
        ],
        borderColor: [
          "rgb(230, 9, 101)",
          "rgb(249, 72, 146)",
          "rgb(255, 161, 201)",
        ],
        borderWidth: 0,
      },
    ],
  };
  return (
    <>
      <Pie data={datasets} />
    </>
  );
};

export default PieChart;
