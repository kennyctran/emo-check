import React, { useEffect, useState } from "react";
import { defaults, Line } from "react-chartjs-2";
import axios from "axios";
import createChartData from "../helpers/createChartData";
import ViewEntries from "./ViewEntries";
import { isEmpty } from "lodash";
import Grid from "@material-ui/core/Grid";

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
    <div style={{ width: "95vw" }}>
      <div className="spacer" style={{ height: "40px" }}></div>
      <Grid container direction="row" justify="center">
        <Grid item xs={6}>
          <Line data={chartData} options={options} />
        </Grid>
        <div
          className="spacer"
          style={{ width: "2rem", "max-width": "100px" }}
        ></div>
        <Grid item xs={5} container direction="column">
          {!isEmpty(accordionData) &&
            accordionData.ratings.map((rating, i) => {
              return <ViewEntries key={i} accordionData={rating} />;
            })}
        </Grid>
      </Grid>
    </div>
  );
}
