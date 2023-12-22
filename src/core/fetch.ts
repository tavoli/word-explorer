import {useEffect} from "react";
import useDebounceValue from "./debounce";
import {AutoCompleteProps} from "./types";

async function fetchEvent(
  search: string = "",
  options: AutoCompleteProps
) {
  return window.fetch(`${options.url}${search}`)
    .then((response) => response.json())
    .then((data) => data)
}

export function useDebounceFetch({
  search,
  dispatch,
  options,
}) {
  const debounceSearch = useDebounceValue(
    search,
    options.debounceTime ?? 0
  )

  useEffect(() => {
    if (search.length >= (options.minChars || 3)) {
      fetchEvent(search, options)
        .then((data) => dispatch({
          type: "QUERY_SUCCESS", payload: data
        }))
        .catch((error) => dispatch({
          type: "QUERY_ERROR", payload: error
        }))
    }
  }, [debounceSearch]);
}
