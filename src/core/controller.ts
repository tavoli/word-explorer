import {createContext, useEffect, useReducer} from "react";

import initialState from "./state.json";
import {useDebounceFetch} from "./fetch";
import {reducer} from "./reducer";

import {
  AutoCompleteProps, ControllerContext
} from "./types";

function useInitialResults({ search, dispatch, options }) {
  useEffect(() => {
    if (options.initialResults && search.length === 0) {
      dispatch({
        type: "QUERY_SUCCESS", payload: options.initialResults
      })
    }
  }, [search])
}

export const setupController = (options: AutoCompleteProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useDebounceFetch({
    state, dispatch, options
  })

  useInitialResults({
    search: state.search, dispatch, options
  })

  return {state, dispatch};
}

export const Controller = createContext<ControllerContext>({
  state: initialState,
  dispatch: () => {},
})


