import {AutoCompleteAction, AutoCompleteState} from "./types"

export const reducer = (draft: AutoCompleteState, action: AutoCompleteAction) => {
  switch (action.type) {
    case "QUERY":
      draft.search = action.payload
      break
    case "QUERY_START":
      draft.loading = true
      break
    case "QUERY_SUCCESS":
      draft.loading = false
      draft.error = null
      if (action.payload) {
        draft.data.set(draft.search, action.payload)
      }
      break
    case "QUERY_ERROR":
      draft.loading = false
      draft.error = action.payload
      break
    default:
      return draft
  }
}
