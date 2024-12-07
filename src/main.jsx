import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router'

import Home from './Components/Home'
import Sobre from './Components/Sobre'
import Contato from './Components/Contato'
import Blog from './Components/Blog'
import Post from './Components/Post'
import Ri from './Components/Ri'
import Produtos from './Components/Produtos'

import PageNotFound from './Components/PageNotFound'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="/blog" >
          <Route index element={<Blog />} />
          <Route path="/blog/sustentabilidade" element={<Post />} />

        </Route>

        <Route path="/ri" element={<Ri />} />

        <Route path="*" element={<PageNotFound />} />

      </Routes>

    </BrowserRouter>

  </StrictMode>
)
