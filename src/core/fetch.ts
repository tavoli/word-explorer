import {cache} from "./cache";
import {ThunkProps} from "./types";

let timer: number[] = []

const server = async (url: string, search: string) => {
  const response = await window.fetch(`${url}${search}`)
  const data = await response.json()
  return data
}

const fetchEvent = async ({url, search, dispatch}) => {
  if (cache.has(search)) {
    dispatch({type: "QUERY_SUCCESS", payload: cache.get(search)})
  } else {
    const data = await server(url, search)
    dispatch({type: "QUERY_SUCCESS", payload: data})
    cache.set(search, data)
  }
}

export const debounceFetch = (search: string) =>
  async ({dispatch, options}: ThunkProps) => {
    dispatch({type: "QUERY_START", payload: search})
    timer.forEach(clearTimeout)
    timer.push(
      setTimeout(
        () => fetchEvent({url: options.url, search, dispatch}),
        options.debounceTime
      )
    )
}
