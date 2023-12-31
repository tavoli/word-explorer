import React from 'react'
import ReactDOM from 'react-dom/client'

import Autocomplete from './ui/Autocomplete'

const container = document.getElementById('root')!
const root = ReactDOM.createRoot(container)

const API_URL = import.meta.env.DEV
  ? 'http://localhost:3000/api?q='
  : 'https://autocomplete-orcin.vercel.app/api?q='

root.render(
  <React.StrictMode>
    <Autocomplete
      url={API_URL}
      searchByPaste={true}
      searchBySelection={true}
      debounceTime={300}
      useEnterAsSubmit={true}
      inputAutoFocus={true}
      inputShortcutKey="/"
      minChars={2}
    />
    <footer style={{
      position: 'fixed',
      bottom: 0,
      right: 0,
      padding: '2rem',
      fontSize: '0.8rem',
      color: '#aaa'
    }}>
      <a href="https://github.com/tavoli/great-frontend-autocomplete"
        style={{
        color: 'hsl(60, 90%, 30%)',
        fontSize: '2rem',
        fontWeight: 'bold',
        textDecoration: 'none'
        }}
        target="_blank">
        {'/>'}
      </a>
    </footer>
  </React.StrictMode>
)
