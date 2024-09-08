import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CommentsList from './components/CommentsList.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <h1>Список комментариев</h1>
        <CommentsList />
    </div>
  </StrictMode>,
)
