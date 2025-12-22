import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Call from './routes/Call'
import About from './routes/About'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/call">Call</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/call" element={<Call />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
