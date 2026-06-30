import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/public/home'
import Layanan from './pages/public/layanan'
import DetailLayanan from './pages/public/detail_layanan'
import Kontak from './pages/public/kontak'
import Tentang  from './pages/public/tentang'
import Artikel from './pages/public/artikel'
import DetailArtikel from './pages/public/detail_artikel'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/dashboard'

function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/layanan" element={<PublicLayout><Layanan /></PublicLayout>} />
          <Route path="/layanan/:slug" element={<PublicLayout><DetailLayanan /></PublicLayout>} />
          <Route path="/tentang" element={<PublicLayout><Tentang  /></PublicLayout>} />
          <Route path="/artikel" element={<PublicLayout><Artikel /></PublicLayout>} />
          <Route path="/artikel/:slug" element={<PublicLayout><DetailArtikel /></PublicLayout>} />
          <Route path="/kontak" element={<PublicLayout><Kontak /></PublicLayout>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}