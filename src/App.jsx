import Home from './pages/Home'
import Product from './pages/Product'
import Header from './components/Header'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  const user = null
  return (
    <Router basename={'/smack'}>
      <Header />
      {user && <Navbar />}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </Router>
  )
}

export default App
