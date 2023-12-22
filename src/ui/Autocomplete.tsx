import React from "react";

import {Controller, setupController} from "../core/controller";
import {AutoCompleteProps} from "../core/types";

import Input from "./Input";
import Results from "./Results";

export default function Autocomplete(props: AutoCompleteProps) {
  return (
    <Controller.Provider value={setupController(props)}>
      <Input
        initialResults={props.initialResults}
        autoFocus={props.inputAutoFocus}
        shortcutKey={props.inputShortcutKey}
      />
      <Results />
    </Controller.Provider>
  );
}
