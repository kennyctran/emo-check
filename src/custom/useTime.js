import { useState, useEffect } from "react";
import moment from "moment";

export default function useTime() {
  const [time, setTime] = useState(() => {
    return moment().format("h:mm:ss a");
  });

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("h:mm:ss a"));
    }, 1000);
  }, [time]);

  return [time, setTime];
}
