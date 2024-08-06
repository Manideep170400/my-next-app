"use client"; // Mark as client component

import Pics from "./ROUTER/router";
import { mainData } from "./ROUTER/redux";
import { useState } from "react";

export default function Home() {
  const [info, setInfo] = useState(mainData());

  return (
    <div>
      <Pics />
      <input type="text" value={info.login.email} required />
      <input type="text" value={info.login.password} required />
      <p>Hello World</p>
    </div>
  );
}
