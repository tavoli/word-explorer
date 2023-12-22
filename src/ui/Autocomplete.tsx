import React from "react";

import {useController} from "../core/controller";
import Input from "./Input";
import Results from "./Results";

export default function Autocomplete() {
  const {execQuery, data} = useController();

  return (
    <div>
      <Input onChange={execQuery} />
      <Results items={data} />
    </div>
  );
}
