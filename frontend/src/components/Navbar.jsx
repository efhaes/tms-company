import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang Kami', to: '/tentang' },
  { label: 'Layanan', to: '/layanan' },
  { label: 'Artikel', to: '/artikel' },
  { label: 'Kontak', to: '/kontak' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-[#0C447C] px-6 h-14 flex items-center justify-between sticky top-0 z-50">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo_tms.png" alt="Trimaster Solusindo" className="h-8" />
          <span className="text-white font-medium text-sm tracking-wide hidden sm:block">
            Trimaster Solusindo
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm transition-colors ${
                pathname === link.to
                  ? 'text-white font-medium'
                  : 'text-blue-300 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/kontak"
          className="hidden md:block bg-[#378ADD] text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-[#185FA5] transition-colors"
        >
          Konsultasi Gratis
        </Link>

        {/* Burger button (mobile only) */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile sidebar overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-[#042C53] z-50 transform transition-transform duration-300 md:hidden ${
        menuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-5 h-14 border-b border-[#185FA5]">
          <span className="text-white font-medium text-sm">Trimaster Solusindo</span>
          <button onClick={() => setMenuOpen(false)} className="text-blue-300 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar links */}
        <div className="flex flex-col py-4">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`px-5 py-3 text-sm transition-colors ${
                pathname === link.to
                  ? 'text-white bg-[#185FA5] font-medium'
                  : 'text-blue-300 hover:text-white hover:bg-[#0C447C]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Sidebar CTA */}
        <div className="px-5 mt-2">
          <Link
            to="/kontak"
            onClick={() => setMenuOpen(false)}
            className="block bg-[#378ADD] text-white text-sm font-medium px-4 py-2.5 rounded-lg text-center hover:bg-[#185FA5] transition-colors"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </div>
    </>
  )
}