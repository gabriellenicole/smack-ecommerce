import Home from './pages/Home'
import Product from './pages/Product'
import Header from './components/Header'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router basename={'/smack'}>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </Router>
  )
}

export default App
