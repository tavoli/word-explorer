import React, {useContext} from "react";
import {Controller} from "../core/controller";

export default function Input() {
  const {dispatch} = useContext(Controller)

  return (
    <input
      onChange={(e) => dispatch({
        type: 'QUERY', payload: e.target.value
      })}
      placeholder="Search"
    />
  );
}
