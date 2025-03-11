import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Competences from './pages/Competences'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './utils/ProtectedRoute'
function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competences" element={<ProtectedRoute > <Competences /> </ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>


      </Router>
    </>
  )
}

export default App
