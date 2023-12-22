import {createContext, useEffect, useReducer} from "react";
import {fetchEvent} from "./fetch";
import {reducer} from "./reducer";
import initialState from "./state.json";

import {
  AutoCompleteProps, ControllerContext
} from "./types";

export const setupController = (options: AutoCompleteProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchEvent(state.search, options)
      .then((data) => dispatch({ type: "QUERY_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "QUERY_ERROR", payload: error }));
  }, [state.search]);

  return {state, dispatch};
}

export const Controller = createContext<ControllerContext>({
  state: initialState,
  dispatch: () => {},
})


