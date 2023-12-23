import React from "react";

import {Controller} from "../core/controller";
import {fetchEvent} from "../core/fetch";
import {AutoCompleteProps} from "../core/types";

interface Props {
  initialResults?: AutoCompleteProps['initialResults']
  minChars?: number
  autoFocus?: boolean
  shortcutKey?: string
}

export default function Input(props: Props) {
  const ref = React.useRef<HTMLInputElement>(null)
  const {dispatch, state} = React.useContext(Controller)

  const onShortcutKeyType = (e: KeyboardEvent) => {
    if (e.key === props.shortcutKey) {
      ref.current?.focus()
      // Prevent the "<key>" from being typed into the input
      e.preventDefault()
    }
  }

  React.useEffect(() => {
    if (props.shortcutKey) {
      document.addEventListener('keydown', onShortcutKeyType)
      return () => document.removeEventListener('keydown', onShortcutKeyType)
    }
  }, [props.shortcutKey])

  React.useEffect(() => {
    if (props.initialResults && state.search === '') {
      dispatch({
        type: 'QUERY_SUCCESS', payload: props.initialResults
      })
    }
  }, [state.search])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(fetchEvent(ref.current?.value as string))
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'QUERY', payload: e.target.value})
    if (e.target.value.length >= (props.minChars ?? 3)) {
      dispatch(fetchEvent(e.target.value))
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        ref={ref}
        autoFocus={props.autoFocus}
        onChange={onChange}
        placeholder="Search"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
      />
    </form>
  );
}
