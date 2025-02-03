import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './Components/Header'
import Login from './Components/Login'
import Footer from './Components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Login />
    <Footer />
  </StrictMode>
)
