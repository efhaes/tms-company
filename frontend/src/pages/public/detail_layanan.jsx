import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function DetailLayanan() {
  const { slug } = useParams()
  const [layanan, setLayanan] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch layanan data by slug
    fetch(`http://localhost:8000/api/layanan/${slug}/`)
      .then(res => res.json())
      .then(data => {
        setLayanan(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching layanan:', err)
        setLoading(false)
      })
  }, [slug])

  if (loading) return <div className="container mx-auto py-8">Loading...</div>
  if (!layanan) return <div className="container mx-auto py-8">Layanan tidak ditemukan</div>

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#042C53] to-[#0A4278] text-white py-16 px-4">
        <div className="container mx-auto">
          <Link to="/layanan" className="text-blue-200 hover:text-white mb-4 inline-block">
            ← Kembali ke Layanan
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{layanan.nama}</h1>
          <span className="inline-block px-4 py-2 bg-blue-500/30 rounded-full text-sm capitalize">
            {layanan.kategori}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image */}
            {layanan.foto && (
              <img
                src={layanan.foto}
                alt={layanan.nama}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
              />
            )}

            {/* Short Description */}
            <div className="bg-blue-50 border-l-4 border-[#042C53] p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 text-lg">{layanan.deskripsi_singkat}</p>
            </div>

            {/* Full Description */}
            <div className="prose max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Deskripsi Layanan</h2>
              <p className="text-gray-600 whitespace-pre-line">{layanan.deskripsi}</p>
            </div>

            {/* Features */}
            {layanan.fitur && layanan.fitur.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Fitur Layanan</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {layanan.fitur.map(fitur => (
                    <div key={fitur.id} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <div className="w-6 h-6 bg-[#042C53] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{fitur.nama}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Tertarik dengan Layanan Ini?</h3>
              <p className="text-gray-600 mb-6">
                Konsultasikan kebutuhan Anda dengan tim profesional kami untuk solusi terbaik.
              </p>
              <Link
                to="/kontak"
                className="block w-full bg-[#042C53] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#0A4278] transition-colors mb-3"
              >
                Hubungi Kami
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-[#25D366] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Butuh Konsultasi Lebih Lanjut?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Tim kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan perpajakan dan akuntansi bisnis Anda.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/kontak"
              className="bg-[#042C53] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0A4278] transition-colors"
            >
              Hubungi Kami
            </Link>
            <Link
              to="/layanan"
              className="border-2 border-[#042C53] text-[#042C53] px-8 py-3 rounded-lg font-semibold hover:bg-[#042C53] hover:text-white transition-colors"
            >
              Lihat Layanan Lain
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
