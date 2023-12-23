import {ThunkProps} from "./types";

let timer: number[] = []

export const fetchEvent = (search: string) =>
  async ({dispatch, options}: ThunkProps) => {
    dispatch({type: "QUERY_START", payload: search})
    timer.forEach(clearTimeout)
    timer.push(
      setTimeout(async () => {
        const response = await window.fetch(`${options.url}${search}`)
        const data = await response.json()
        dispatch({type: "QUERY_SUCCESS", payload: data})
      },
      options.debounceTime ?? 0)
    )
}
