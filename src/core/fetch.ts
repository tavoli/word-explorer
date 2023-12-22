import {AutoCompleteProps} from "./types";

export async function fetchEvent(
  search: string = "",
  options: AutoCompleteProps
) {
  return window.fetch(`${options.url}${search}`)
    .then((response) => response.json())
    .then((data) => data)
}
