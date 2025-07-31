import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import stylings 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './assets/fontawesome/css/fontawesome.min.css'
import './assets/fontawesome/css/solid.min.css'
import './assets/fontawesome/css/brands.min.css'
import './index.css'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
