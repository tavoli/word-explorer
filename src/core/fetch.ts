import {AutoCompleteProps, AutoCompleteState, SetState} from "./types";

let timer: number[] = []

export function fetchEvent(
  search: string = "",
  options: AutoCompleteProps
) {
  return async (state: AutoCompleteState, setState: SetState) => {
    timer.forEach(clearTimeout)
    timer.push(setTimeout(async () => {
      const response = await window.fetch(`${options.url}${search}`)
      const data = await response.json()
      setState({...state, data, loading: false})
    }, options.debounceTime ?? 0))
  }
}
