// pages
import Home from './pages/Home'
import Product from './pages/Product'
import Login from './pages/Login'

// components
import Header from './components/Header'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useUser } from './hooks/useUser'
import PersistAuth from './components/PersistAuth'

function App() {
  const { currentUser } = useUser()
  return (
    <Router basename={'/smack'}>
      <Header />
      {currentUser && <Navbar />}
      <Routes>
        <Route element={<PersistAuth />}>
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
