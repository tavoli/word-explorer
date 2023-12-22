import React from 'react'
import ReactDOM from 'react-dom/client'

import Autocomplete from './ui/Autocomplete'

const container = document.getElementById('root')!
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <Autocomplete
      url="http://localhost:3000?q="
      debounceTime={500}
      useEnterAsSubmit={true}
      inputAutoFocus={true}
      inputShortcutKey="/"
      initialResults={[
        {id: '1', text: 'foo'},
        {id: '2', text: 'bar'},
        {id: '3', text: 'baz'},
      ]}
    />
  </React.StrictMode>
)
