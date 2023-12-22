import {createContext, useReducer} from "react";

import {Results} from "./types";

export const reducer = (
  state: AutoCompleteState,
  search: string,
) => {
  console.log("reducer", search);
  return state;
}

interface AutoCompleteState {
  search: string;
  data: Results;
  loading: boolean;
  error: Error | null;
}

interface ControllerContext {
  state: AutoCompleteState;
  query: (search: string) => void;
}

export const initialState: AutoCompleteState = {
  search: "",
  data: [],
  loading: false,
  error: null,
}

export const Controller = createContext<ControllerContext>({
  state: initialState,
  query: () => {},
})

export const setupController = () => {
  const [state, query] = useReducer(reducer, initialState);
  return {state, query};
}
