import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Offer from './pages/Offer'
import Blog from './pages/Blog'
import Regulations from './pages/Regulations'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oferta" element={<Offer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/regulamin" element={<Regulations />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App