import React, { useContext, useEffect } from 'react';
import { Controller } from '../core/controller';
import {debounceFetch} from '../core/fetch';
import { build } from './components/build';

const resultClassNames = {
  loading: "ac__results ac__result--loading",
  error: "ac__results ac__result--error",
  empty: "ac__results ac__result--empty",
  unknown: "ac__results ac__results--error",
  success: "ac__results",
};

const Output = ({type, content}) => {
  const className = resultClassNames[type] || resultClassNames.unknown;
  const resultContent = type === 'success' ? build(content) : null;

  return resultContent && <output className={className}>{resultContent}</output>;
};

const Results = ({select}) => {
  const { state, dispatch } = useContext(Controller);

  useEffect(() => {
    if (select) {
      const onSelection = () => {
        const word = document.getSelection()?.toString();
        if (word) {
          dispatch({ type: 'QUERY', payload: word });
          dispatch(debounceFetch(word))
        }
      };

      document.addEventListener('mouseup', onSelection);
      return () => document.removeEventListener('mouseup', onSelection);
    }
  }, []);

  if (state.error) {
    return <Output type="error" content={state.error} />;
  }

  return <Output type="success" content={state.data.get(state.search)} />;
};

export default Results;
