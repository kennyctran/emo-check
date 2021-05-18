import { useState } from "react";

export default function useName() {
  const [name, setName] = useState(() => {
    const storedName = window.localStorage.getItem("name");
    if (storedName) {
      return storedName;
    }
    return "Kenny";
  });

  return name;
}
