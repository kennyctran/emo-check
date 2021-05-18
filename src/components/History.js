import React, { useEffect } from "react";
import { defaults, Line } from "react-chartjs-2";
import axios from "axios";

const defaultData = {
  labels: ["monday", "tuesday", "wednesday"],
  datasets: [
    {
      label: "Emotional Rating",
      data: [5, 2, 10],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export default function History() {
  useEffect(() => {
    (async (username) => {
      const { data } = await axios.get("/api/history", {
        params: { username },
      });
      console.log(data);
      // DO SOMETHING WITH THE DATA
    })("Test username");
  }, []);
  return (
    <div>
      <Line data={defaultData} options={options} />
    </div>
  );
}
