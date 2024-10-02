import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import HomePage from './components/homePage/HomePage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Product from './components/SingleProduct'
import Catalog from './components/Catalog'

function App() {

  const NotFound = () => <div className='not_found'><h1>Страница не найдена</h1></div>;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/products' element={<Catalog />}/>
        <Route path='/products/:id' element={<Product />}/>

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
