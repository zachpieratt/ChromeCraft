import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import TopHeader from './header.tsx';
import ImageGallery from './gallery.tsx';
import Attribution from './attribution.tsx';

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

createRoot(document.getElementById('footerAttribution')!).render(
  <StrictMode>
    <Attribution />
  </StrictMode>
)