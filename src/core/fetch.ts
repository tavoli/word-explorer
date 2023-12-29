import {ThunkProps} from "./types";

let timer: number[] = []

const query = async (url: string, search: string) => {
  const response = await window.fetch(`${url}${search}`)
  const data = await response.json()
  return data
}

const fetchEvent = async ({url, search, dispatch, state}) => {
  if (state.data.has(search)) {
    dispatch({type: "QUERY_SUCCESS"})
  } else {
    try {
      const data = await query(url, search)
      dispatch({type: "QUERY_SUCCESS", payload: data})
    } catch (error) {
      dispatch({type: "QUERY_ERROR", payload: error.message})
    }
  }
}

export const debounceFetch = (search: string) =>
  async ({state, dispatch, options}: ThunkProps) => {
    dispatch({type: "QUERY_START", payload: search})
    timer.forEach(clearTimeout)
    timer.push(
      setTimeout(
        () => fetchEvent({
          url: options.url,
          search,
          dispatch,
          state
        }),
        options.debounceTime
      )
    )
}
