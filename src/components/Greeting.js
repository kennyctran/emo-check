import React, { useState } from "react";
import useName from "../custom/useName";

export default function Greeting() {
  const [message, setMessage] = useState("Hello, ");
  const name = useName();
  return (
    <div>
      <h1>{message + name}</h1>
    </div>
  );
}
