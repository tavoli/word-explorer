import React from "react";

import {Controller, setupController} from "../core/controller";

import Input from "./Input";
import Results from "./Results";

interface Props {
  url: string;
}

export default function Autocomplete({ url }: Props) {
  return (
    <Controller.Provider value={setupController(url)}>
      <Input />
      <Results />
    </Controller.Provider>
  );
}
