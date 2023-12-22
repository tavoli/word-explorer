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

const fetchQuery = async ({
  search,
  dispatch,
  options,
}) => {
  return fetchEvent(search, options)
    .then((data) => dispatch({
      type: "QUERY_SUCCESS", payload: data
    }))
    .catch((error) => dispatch({
      type: "QUERY_ERROR", payload: error
    }))
}

export function useFetchEvent({
  state,
  dispatch,
  options,
}) {
  const debounceValue = useDebounceValue(
    state.search,
    options.debounceTime ?? 0
  )

  useEffect(() => {
    if (
      state.search.length >= (options.minChars || 3) &&
      state.event === "QUERY"
    ) {
      fetchQuery({
        search: debounceValue,
        dispatch,
        options,
      })
    }
  }, [debounceValue])

  useEffect(() => {
    if (state.event === "SUBMIT" && options.useEnterAsSubmit) {
      fetchQuery({
        search: state.search,
        dispatch,
        options,
      })
    }
  }, [state.event])
}
