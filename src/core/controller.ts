import {createContext} from "react";
import {enableMapSet} from "immer";
import {useImmerReducer} from "use-immer";

import {
  AutoCompleteProps,
  AutoCompleteState,
  ControllerContext
} from "./types";
import {reducer} from "./reducer";

const initialState: AutoCompleteState = {
  search: "",
  data: new Map(),
  loading: false,
  error: null,
}

enableMapSet()

export const setupController = (options: AutoCompleteProps) => {
  const [state, internalDispatch] = useImmerReducer(reducer, initialState)

  const dispatch = (action: any) => {
    if (typeof action === "function") {
      action({
        dispatch: internalDispatch,
        options,
        state
      })
    }
    return internalDispatch(action)
  }

  return {state, dispatch}
}

export const Controller = createContext<ControllerContext>({
  state: initialState,
  dispatch: () => {},
})
