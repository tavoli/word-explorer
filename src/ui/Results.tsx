import {marked} from 'marked';
import React, {useContext} from 'react';
import {Controller} from '../core/controller';
import {Results} from '../core/types';

const Output = (({type, content}) => {
  switch (type) {
    case 'loading':
      return (
        <output className="ac__results ac__results--loading">
          SEARCHING...
        </output>
      )
    case 'error':
      return (
        <output className="ac__results ac__results--error">
          ERROR
        </output>
      )
    case 'empty':
      return (
        <output className="ac__results ac__results--empty">
          EMPTY
        </output>
      )
    case 'success':
      return (
        <output
          className="ac__results"
          form="ac-form"
          htmlFor="ac__input"
          dangerouslySetInnerHTML={{__html: marked(content)}}
        />
      )
    default:
      return (
        <output className="ac__results ac__results--error">
          UNKNOWN ERROR
        </output>
      )
  }
})

export default function Results() {
  const {state} = useContext(Controller)

  if (state.loading) {
    return <Output type="loading" content="LOADING..." />
  }

  if (state.error) {
    return <Output type="error" content={state.error} />
  }

  if (!state.data.has(state.search)) {
    return <Output type="empty" content="EMPTY" />
  }

  if (state.data.has(state.search)) {
    const results = state.data.get(state.search) ?? ''
    return <Output type="success" content={results} />
  }

  return <Output type="error" content="UNKNOWN ERROR" />
}
