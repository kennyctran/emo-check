import React from "react";
import useTime from "../custom/useTime";

export default function Clock() {
  const [time] = useTime();
  return (
    <div>
      <h2>{time}</h2>
    </div>
  );
}
