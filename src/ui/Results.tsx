import React, {useContext} from 'react';
import {Controller} from '../core/controller';
import {Results} from '../core/types';

export default function Results() {
  const {state} = useContext(Controller)

  const render = (content: JSX.Element | JSX.Element[]) => {
    return (
      <output className="ac__results" form="ac-form" htmlFor="ac__input">
        {content}
      </output>
    )
  }

  if (state.loading) {
    return render(
      <span className="ac__result-loading">
        SEARCHING...
      </span>
    )
  } else if (state.error) {
    return render(
      <span className="ac__result-error">
        <pre>{JSON.stringify(state.error, null, 2)}</pre>
      </span>
    )
  } else if (!state.data.get(state.search)) {
    return render(
      <span className="ac__result-empty">
        EMPTY
      </span>
    )
  } else if (state.data.has(state.search)) {
    return render(
      state.data.get(state.search)?.map((result, index) => (
        <pre className="ac__result" key={index}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )) ?? []
    )
  } else {
    return render(
      <span className="ac__result-error">
        UNKNOWN ERROR
      </span>
    )
  }
}
