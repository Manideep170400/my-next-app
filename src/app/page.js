"use client";

import Pics from "./ROUTER/router";
import { mainData } from "./ROUTER/redux";
import { useState } from "react";

export default function Home() {
  const [info, setInfo] = useState(mainData());

  const handleChange = () => {
    setInfo(info.login.email);
  };
  return (
    <div>
      <Pics />
      <input
        type="text"
        value={info.login.email}
        onClick={handleChange}
        required
      />
      <input
        type="text"
        value={info.login.password}
        onClick={handleChange}
        required
      />
      <p>Hello World</p>
    </div>
  );
}
