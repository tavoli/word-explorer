import React from "react";

import {Controller, setupController} from "../core/controller";
import {AutoCompleteProps} from "../core/types";

import "./index.css";
import Input from "./Input";
import Results from "./Results";

export default function Autocomplete(props: AutoCompleteProps) {
  return (
    <Controller.Provider value={setupController(props)}>
      <div className="ac">
        <div className="ac__container">
          <Input
            initialResults={props.initialResults}
            autoFocus={props.inputAutoFocus}
            shortcutKey={props.inputShortcutKey}
            minChars={props.minChars}
          />
          <Results />
        </div>
      </div>
    </Controller.Provider>
  );
}
