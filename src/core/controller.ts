import {createContext, useEffect, useReducer} from "react";

import {
  AutoCompleteAction, AutoCompleteState, ControllerContext
} from "./types";

export const reducer =  (
  state: AutoCompleteState,
  action: AutoCompleteAction
) => {
  switch (action.type) {
    case "QUERY":
      return {
        ...state,
        search: action.payload,
        loading: true,
      }
    case "QUERY_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case "QUERY_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}

export const initialState: AutoCompleteState = {
  search: "",
  data: [],
  loading: false,
  error: null,
}

async function fetchResults(url: string, search: string = "") {
  return window.fetch(`${url}${search}`)
    .then((response) => response.json())
    .then((data) => data)
}

export const setupController = (url: string = "") => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchResults(url, state.search)
      .then((data) => dispatch({ type: "QUERY_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "QUERY_ERROR", payload: error }));
  }, [state.search]);

  return {state, dispatch};
}

export const Controller = createContext<ControllerContext>({
  state: initialState,
  dispatch: () => {},
})


