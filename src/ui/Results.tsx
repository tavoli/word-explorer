import React, {useContext} from 'react';
import {Controller} from '../core/controller';
import {Results} from '../core/types';

export default function Results() {
  const {state} = useContext(Controller)

  const render = (content: JSX.Element | JSX.Element[]) => {
    return (
      <ul className="ac__results">
        {content}
      </ul>
    )
  }

  if (state.loading) {
    return render(
      <li className="ac__result-loading">
        SEARCHING...
      </li>
    )
  } else if (state.error) {
    return render(
      <li className="ac__result-error">
        <pre>{JSON.stringify(state.error, null, 2)}</pre>
      </li>
    )
  } else if (!state.data.get(state.search)) {
    return render(
      <li className="ac__result-empty">
        EMPTY
      </li>
    )
  } else if (state.data.has(state.search)) {
    return render(
      state.data.get(state.search)?.map((result, index) => (
        <li className="ac__result" key={index}>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </li>
      )) ?? []
    )
  } else {
    return render(
      <li className="ac__result-error">
        UNKNOWN ERROR
      </li>
    )
  }
}
