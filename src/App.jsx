// pages
import Home from './pages/Home'
import Product from './pages/Product'
import Login from './pages/Login'
import Payment from './pages/Payment'

// components
import ProtectedRoute from './components/ProtectedRoute'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PersistAuth from './components/PersistAuth'
import Layout from './components/Layout'

function App() {
  return (
    <Router basename={'/smack'}>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<PersistAuth />}>
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/payment' element={<Payment />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
