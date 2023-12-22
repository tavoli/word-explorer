import {createContext, useEffect, useReducer} from "react";

import initialState from "./state.json";
import {fetchEvent} from "./fetch";
import {reducer} from "./reducer";

import {
  AutoCompleteProps, ControllerContext
} from "./types";
import useDebounceValue from "./debounce";

export const setupController = (options: AutoCompleteProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const debounceSearch = useDebounceValue(state.search, options.debounceTime ?? 0)

  useEffect(() => {
    if (state.search.length >= (options.minChars || 3)) {
      fetchEvent(state.search, options)
        .then((data) => dispatch({type: "QUERY_SUCCESS", payload: data}))
        .catch((error) => dispatch({type: "QUERY_ERROR", payload: error}))
    }
  }, [debounceSearch]);

  return {state, dispatch};
}

export const Controller = createContext<ControllerContext>({
  state: initialState,
  dispatch: () => {},
})


