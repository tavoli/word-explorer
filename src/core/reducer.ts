import {fetchEvent} from "./fetch";
import {AutoCompleteState, ReducerProps} from "./types";

// follow redux reducer pattern
// always pure
// TODO: remove setState from reducer
export const reducer = ({
  action,
  state,
  setState,
  options,
}: ReducerProps): AutoCompleteState | Function => {
  switch (action.type) {
    case "QUERY":
      if (action.payload.length >= (options.minChars || 3)) {
        setState({ ...state, loading: true })
        return fetchEvent(action.payload, options)
      }
      return state
    case "SUBMIT":
      if (options.useEnterAsSubmit) {
        setState({ ...state, loading: true })
        return fetchEvent(action.payload, options)
      }
      return state
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
      return state
  }
}
