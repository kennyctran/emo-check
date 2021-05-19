import React, { useEffect, useState } from "react";
import { defaults, Line } from "react-chartjs-2";
import axios from "axios";
import createChartData from "../helpers/createChartData";
import ViewEntries from "./ViewEntries";
import { isEmpty } from "lodash";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grey from "@material-ui/core/colors/Grey";

const useStyles = makeStyles((theme) => {
  return {
    chart: {
      backgroundColor: theme.palette.secondary.light,
      boxShadow: `3px 1px 5px 5px ${theme.palette.secondary.light}`,
    },
    spacer: {
      height: "40px",
    }
  };
});

const options = {
  datasets: {
    line: {
      borderColor: Grey[300],
      pointBackgroundColor: "DarkGoldenRod",
      pointHoverBackgroundColor: "black",
      pointHoverBorderColor: "DarkCyan",
    },
  },
  elements: {
    point: {
      hitRadius: 8,
    },
  },
  tension: 1,
};

export default function History() {
  const [chartData, setChartData] = useState({});
  const [accordionData, setAccordionData] = useState({});
  const classes = useStyles();

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
        <Button variant="contained" color="secondary" onClick={handleMonth}>
          View Month
        </Button>
        <div className="spacer" style={{ width: "10px" }}>
          {""}
        </div>
        <Button variant="contained" color="secondary" onClick={handleWeek}>
          View Current Week
        </Button>
      </Grid>
      <hr />
      <div className={classes.spacer}></div>
      <Grid container direction="row" justify="center">
        <Grid item xs={6}>
          {!isEmpty(chartData) && (
            <Line
              data={chartData}
              options={options}
             className={classes.chart}
            />
          )}
        </Grid>
        <div
          className="spacer"
          style={{ width: "2rem", "max-width": "100px" }}
        ></div>
        <Grid item xs={5} container direction="column">
          {!isEmpty(accordionData) &&
            accordionData.ratings.map((rating, i) => {
              return <ViewEntries key={i} accordionData={rating} forAria={i} />;
            })}
        </Grid>
      </Grid>
      <div className={classes.spacer}></div>
    </div>
  );
}
