import React, {useContext, useEffect, useRef} from "react";

import {Controller} from "../core/controller";
import {debounceFetch} from "../core/fetch";

interface Props {
  minChars?: number
  autoFocus?: boolean
  shortcutKey?: string
  paste?: boolean
}

export default function Input(props: Props) {
  const ref = useRef<HTMLInputElement>(null)
  const {dispatch, state} = useContext(Controller)

  const onShortcutKeyType = (e: KeyboardEvent) => {
    if (e.key === props.shortcutKey) {
      e.preventDefault()
      ref.current?.focus()
    }

    if (e.key === 'Enter') {
      const search = ref.current?.value ?? ''
      dispatch({type: 'QUERY', payload: search})
      dispatch(debounceFetch(search))
    }
  }

  useEffect(() => {
    if (props.shortcutKey) {
      document.addEventListener('keydown', onShortcutKeyType)
      return () => document.removeEventListener('keydown', onShortcutKeyType)
    }
  }, [props.shortcutKey])

  useEffect(() => {
    if (props.paste) {
      const onPaste = (e: ClipboardEvent) => {
        ref.current?.blur()
        const search = e.clipboardData?.getData('text') ?? ''
        dispatch({type: 'QUERY', payload: search})
        dispatch(debounceFetch(search))
      }

      document.addEventListener('paste', onPaste)
      return () => document.removeEventListener('paste', onPaste)
    }
  }, [props.paste])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'QUERY', payload: e.target.value})
    if (e.target.value.length >= (props.minChars ?? 0)) {
      dispatch(debounceFetch(e.target.value))
    }
  }

  return (
    <input
      id="ac__input"
      name="ac__input"
      value={state.search}
      className="ac__input"
      ref={ref}
      autoFocus={props.autoFocus}
      onChange={onChange}
      placeholder="Explore a word..."
      autoCapitalize="off"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
    />
  );
}
