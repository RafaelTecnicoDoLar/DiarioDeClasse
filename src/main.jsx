import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './Components/Header'
import Login from './Components/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Login />
  </StrictMode>
)
