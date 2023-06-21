import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { HeroesApp } from './HeroesApp'
import { BrowserRouter, HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HashRouter>
    <HeroesApp />
  </HashRouter>
  </React.StrictMode>,

)
