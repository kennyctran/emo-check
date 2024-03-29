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
import moment from "moment";
import Calendar from "react-calendar";

const useStyles = makeStyles((theme) => {
  return {
    chart: {
      backgroundColor: theme.palette.secondary.light,
      boxShadow: `3px 1px 5px 5px ${theme.palette.secondary.light}`,
    },
    spacer: {
      height: "40px",
    },
    calendarContainer: {
      width: "30%",
      position: "absolute",
      left: "50%",
      zIndex: 9999,
      backgroundColor: "rgba(255, 255, 255, .9)",
    },
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
  scales: {
    x: {
      grid: {
        tickColor: "grey",
      },
      ticks: {
        color: Grey[500],
      },
    },
    y: {
      grid: {
        tickColor: "grey",
      },
      ticks: {
        color: Grey[500],
      },
    },
  },
  tension: 1,
};

export default function History() {
  const [chartData, setChartData] = useState({});
  const [accordionData, setAccordionData] = useState({});
  const [week, setWeek] = useState(() => moment().weeks());
  const [showCal, setShowCal] = useState(false);
  const classes = useStyles();

  const handleMonth = async (username) => {
    const { data } = await axios.get("/api/history", {
      params: { username: "kenny" },
    });
    setAccordionData(data);
    setChartData(createChartData(data));
  };

  const handleDateChange = (date) => {
    const newWeek = moment(date).weeks();
    setWeek(newWeek);
    handleWeek(newWeek);
  };

  const handleWeek = async (weekNumber, username = "kenny") => {
    try {
      const { data } = await axios.get("/api/week", {
        params: { username, week: weekNumber },
      });
      setAccordionData(data);
      setChartData(createChartData(data));
    } catch (err) {
      console.log(err);
      console.log("Couldn't retrieve the data.");
    }
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
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleWeek(moment().weeks())}
        >
          View Current Week
        </Button>
        <div className="spacer" style={{ width: "10px" }}>
          {""}
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setShowCal((prev) => !prev)}
        >
          Toggle Week
        </Button>
      </Grid>
      <hr />
      <div className={classes.spacer}></div>
      {showCal && (
        <div className={classes.calendarContainer}>
          <Calendar
            onChange={handleDateChange}
            maxDate={new Date()}
            defaultValue={new Date()}
            calendarType="US"
          />
        </div>
      )}
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
          style={{ width: "2rem", maxWidth: "100px" }}
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
