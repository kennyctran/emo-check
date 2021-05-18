import moment from "moment";

export default function createChartData({ ratings }) {
  const labels = ratings.reduce((accum, { date }) => {
    return [...accum, moment(date).format("MMMM Do YYYY")];
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
