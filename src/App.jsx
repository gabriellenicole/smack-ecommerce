import Home from './pages/Home'
import Test from './pages/Test'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Test2 from './pages/Test2'

function App() {
  return (
    <Router basename={'/smack'}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/test2' element={<Test2 />} />
      </Routes>
    </Router>
  )
}

export default App
