import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './Components/Header'
import Verificacao from './Components/Verificacao'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Verificacao />
  </StrictMode>
)
