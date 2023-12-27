import React from 'react'
import ReactDOM from 'react-dom/client'

import Autocomplete from './ui/Autocomplete'

const container = document.getElementById('root')!
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <Autocomplete
      url="https://autocomplete-orcin.vercel.app/api?q="
      debounceTime={500}
      useEnterAsSubmit={true}
      inputAutoFocus={true}
      inputShortcutKey="/"
      initialResults={[]}
    />
  </React.StrictMode>
)
