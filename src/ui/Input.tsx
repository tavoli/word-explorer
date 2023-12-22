import React, {useContext} from "react";
import {Controller} from "../core/controller";

export default function Input() {
  const {query} = useContext(Controller)

  return (
    <input
      onChange={(e) => query(e.target.value)}
      placeholder="Search"
    />
  );
}
