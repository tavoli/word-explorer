import React from "react";
import {Controller} from "../core/controller";

interface Props {
  autoFocus?: boolean
  shortcutKey?: string
}

export default function Input(props: Props) {
  const ref = React.useRef<HTMLInputElement>(null)
  const {dispatch} = React.useContext(Controller)

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

  return (
    <input
      ref={ref}
      autoFocus={props.autoFocus}
      onChange={(e) => dispatch({
        type: 'QUERY', payload: e.target.value
      })}
      placeholder="Search"
      autoCapitalize="off"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
    />
  );
}
