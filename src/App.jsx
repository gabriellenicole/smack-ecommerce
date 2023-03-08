import Home from './pages/Home'
import Product from './pages/Product'
import Header from './components/Header'
import Navbar from './components/Navbar'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Login from './pages/Login'
import { useUser } from './hooks/useUser'

function App() {
  // protect Home route if user is null
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }
    return children
  }

  const { currentUser } = useUser()
  return (
    <Router basename={'/smack'}>
      <Header />
      {currentUser && <Navbar />}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path='/product/:id'
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
