import {createContext, useReducer} from "react";

import {AutoCompleteState, ControllerContext} from "./types";

export const reducer = (
  state: AutoCompleteState,
  search: string,
) => {
  console.log("reducer", search);
  return state;
}

export const initialState: AutoCompleteState = {
  search: "",
  data: [],
  loading: false,
  error: null,
}

export const setupController = () => {
  const [state, query] = useReducer(reducer, initialState);
  return {state, query};
}

export const Controller = createContext<ControllerContext>({
  state: initialState,
  query: () => {},
})


