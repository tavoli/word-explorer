import React, {useContext} from 'react';
import {Controller} from '../core/controller';
import {Results} from '../core/types';

export default function Results() {
  const {state} = useContext(Controller)
  
  return (
    <ul>
      {state.data.map((item, index) => (
        <li key={index}>
          <pre>{JSON.stringify(item, null, 2)}</pre>
        </li>
      ))} 
    </ul>
  );
}
