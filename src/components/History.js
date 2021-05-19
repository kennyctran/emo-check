import React, { useEffect, useState } from "react";
import { defaults, Line } from "react-chartjs-2";
import axios from "axios";
import createChartData from "../helpers/createChartData";
import ViewEntries from "./ViewEntries";
import { isEmpty } from "lodash";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// const defaultData = {
//   labels: [],
//   datasets: [
//     {
//       label: "Emotional Rating",
//       data: [],
//       fill: true,
//       backgroundColor: "rgb(255, 99, 132)",
//       borderColor: "rgba(255, 99, 132, 0.2)",
//     },
//   ],
// };

export default function History() {
  const [chartData, setChartData] = useState({});
  const [accordionData, setAccordionData] = useState({});

  const handleMonth = async (username) => {
    const { data } = await axios.get("/api/history", {
      params: { username: "kenny" },
    });
    setAccordionData(data);
    setChartData(createChartData(data));
  };
  const handleWeek = async () => {
    alert("We out here fetching the current week");
  };

  return (
    <div style={{ width: "95vw" }}>
      <div className="spacer" style={{ height: "40px" }}></div>
      <Grid container justify="center">
        <Button variant="outlined" color="secondary" onClick={handleMonth}>
          View Month
        </Button>
        <div className="spacer" style={{ width: "10px" }}>{""}</div>
        <Button variant="outlined" color="secondary" onClick={handleWeek}>
          View Current Week
        </Button>
      </Grid>
      <hr />
      <Grid container direction="row" justify="center">
        <Grid item xs={6}>
          <Line data={chartData} />
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
