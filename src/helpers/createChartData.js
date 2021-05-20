import moment from "moment";

export default function createChartData({ ratings }) {
  const labels = ratings.reduce((accum, { date }) => {
    return [...accum, moment(date).format("MMMM Do")];
  }, []);

  const data = ratings.reduce((accum, { emotionalRating }) => {
    return [...accum, emotionalRating];
  }, []);

  return {
    labels,
    datasets: [
      {
        label: "Emotional Rating",
        data,
      },
    ],
  };
}
