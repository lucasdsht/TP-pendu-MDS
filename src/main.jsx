import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StatsProvider } from './context/StatProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StatsProvider>
        <App />
      </StatsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
