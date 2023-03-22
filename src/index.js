import React from 'react'
import ReactDOM,{createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import { createRouter } from '@remix-run/router'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

