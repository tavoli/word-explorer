import {AutoCompleteAction, AutoCompleteState} from "./types";

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
