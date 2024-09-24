import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import Header from './components/Header'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
      </Routes>
    </Router>
  )
}

export default App
