import React, {useContext} from "react";
import {Controller} from "../core/controller";

interface Props {
  autoFocus?: boolean
}

export default function Input(props: Props) {
  const ref = React.useRef<HTMLInputElement>(null)
  const {dispatch} = useContext(Controller)

  return (
    <input
      ref={ref}
      autoFocus={props.autoFocus}
      onChange={(e) => dispatch({
        type: 'QUERY', payload: e.target.value
      })}
      placeholder="Search"
    />
  );
}
