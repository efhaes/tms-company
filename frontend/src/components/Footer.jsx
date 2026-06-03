import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#042C53] px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo_tms.png" alt="Trimaster Solusindo" className="h-8" />
          <span className="text-white text-sm font-medium hidden sm:block">Trimaster Solusindo</span>
        </div>
        <div className="flex gap-6">
          <Link to="/layanan" className="text-blue-300 text-xs hover:text-white">Layanan</Link>
          <Link to="/artikel" className="text-blue-300 text-xs hover:text-white">Artikel</Link>
          <Link to="/kontak" className="text-blue-300 text-xs hover:text-white">Kontak</Link>
        </div>
        <span className="text-blue-400 text-xs">© 2026 Trimaster Solusindo</span>
      </div>
    </footer>
  )
}