import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NotesApp from './components/NotesApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotesApp />
  </StrictMode>,
)
