import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import TopHeader from './header.tsx'
import ImageGallery from './gallery.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TopHeader />
  </StrictMode>,
)

createRoot(document.getElementById('gallery')!).render(
  <StrictMode>
    <ImageGallery />
  </StrictMode>
)