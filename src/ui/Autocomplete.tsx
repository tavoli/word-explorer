import React from "react";

import {Controller, setupController} from "../core/controller";

import Input from "./Input";
import Results from "./Results";

export default function Autocomplete() {
  return (
    <Controller.Provider value={setupController()}>
      <Input />
      <Results />
    </Controller.Provider>
  );
}
