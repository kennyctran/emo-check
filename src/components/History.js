import React, { useEffect, useState } from "react";
import { defaults, Line } from "react-chartjs-2";
import axios from "axios";
import createChartData from "../helpers/createChartData";
import ViewEntries from "./ViewEntries";
import { isEmpty } from "lodash";

const defaultData = {
  labels: [],
  datasets: [
    {
      label: "Emotional Rating",
      data: [],
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
  const [chartData, setChartData] = useState({});
  const [accordionData, setAccordionData] = useState({});

  useEffect(() => {
    (async (username) => {
      const { data } = await axios.get("/api/history", {
        params: { username },
      });
      setAccordionData(data);
      setChartData(createChartData(data));
    })("Test username");
  }, []);
  return (
    <div>
      <Line data={chartData} options={options} />
      {!isEmpty(accordionData) &&
        accordionData.ratings.map((rating, i) => {
          return <ViewEntries key={i} accordionData={rating} />;
        })}
    </div>
  );
}
