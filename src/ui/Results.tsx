import React from 'react';
import {Results} from '../core/types';

interface Props {
  items: Results
}

export default function Results({items}: Props) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))} 
    </ul>
  );
}
