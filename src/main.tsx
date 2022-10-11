import React from 'react'
import ReactDOM from 'react-dom/client' // DOM → Document Object Model - Representação do HTML
import {App} from './App'


// ! → confirm which element exist
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
