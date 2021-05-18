import { useState, useEffect } from "react";
import moment from "moment";

export default function useTime() {
  const [time, setTime] = useState(() => {
    return moment().format("LTS");
  });

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("LTS"));
    }, 1000);
  }, [time]);

  return [time, setTime];
}
