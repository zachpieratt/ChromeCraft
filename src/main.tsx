import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import MyComponent from './header.tsx'
import ImageGallery from './gallery.tsx'
import SearchInput from './searchField.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyComponent />
  </StrictMode>,
)

createRoot(document.getElementById('gallery')!).render(
  <StrictMode>
    <ImageGallery />
  </StrictMode>
)

createRoot(document.getElementById('searchInput')!).render(
  <StrictMode>
    <SearchInput />
  </StrictMode>
)