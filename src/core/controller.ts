import {createContext, useEffect, useState} from "react";

import initialState from "./state.json";
import {reducer} from "./reducer";

import {
  AutoCompleteProps, ControllerContext
} from "./types";

function useThunkReducer(reducer: Function, {initialState, options}) {
  const [action, dispatch] = useState({type: '', payload: ''})
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const next = reducer({
      action, state, setState, options
    })

    if (typeof next === "function") {
      next(state, setState)
    } else {
      setState(next)
    }
  }, [action])

  return {state, dispatch}
}


export const setupController = (options: AutoCompleteProps) => {
  return useThunkReducer(reducer, {initialState, options})
}

export const Controller = createContext<ControllerContext>({
  state: initialState,
  dispatch: () => {},
})


