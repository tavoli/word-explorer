import {AutoCompleteAction, AutoCompleteState} from "./types";

export const reducer =  (
  state: AutoCompleteState,
  action: AutoCompleteAction
) => {
  switch (action.type) {
    case "QUERY":
      return {
        ...state,
        event: 'QUERY',
        search: action.payload,
        loading: true,
      }
    case "SUBMIT":
      return {
        ...state,
        event: 'SUBMIT',
        search: action.payload,
        loading: true,
      }
    case "QUERY_SUCCESS":
      return {
        ...state,
        event: 'QUERY_SUCCESS',
        data: action.payload,
        loading: false,
      }
    case "QUERY_ERROR":
      return {
        ...state,
        event: 'QUERY_ERROR',
        error: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}
