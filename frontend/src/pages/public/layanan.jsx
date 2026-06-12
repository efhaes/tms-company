import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Layanan() {
  const [layananList, setLayananList] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedKategori, setSelectedKategori] = useState('all')

  useEffect(() => {
    fetch('http://localhost:8000/api/layanan/')
      .then(res => res.json())
      .then(data => {
        setLayananList(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching layanan:', err)
        setLoading(false)
      })
  }, [])

  const kategoriList = ['all', 'perpajakan', 'akuntansi', 'lainnya']
  const filteredLayanan = selectedKategori === 'all' 
    ? layananList 
    : layananList.filter(l => l.kategori === selectedKategori)

  if (loading) return <div className="container mx-auto py-8">Loading...</div>

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#042C53] to-[#0A4278] text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Layanan Profesional Kami</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Solusi perpajakan dan akuntansi terpercaya untuk kesuksesan bisnis Anda
          </p>
        </div>
      </div>

      {/* Penjelasan Layanan Perusahaan */}
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Mengapa Memilih Trimaster Solusindo?</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Trimaster Solusindo adalah konsultan perpajakan dan akuntansi yang berdedikasi membantu 
            perusahaan dan individu dalam mengelola kewajiban keuangan mereka dengan profesional dan 
            sesuai regulasi yang berlaku. Dengan pengalaman bertahun-tahun, kami siap memberikan 
            solusi yang tepat untuk kebutuhan keuangan Anda.
          </p>
        </div>
      </div>

      {/* Keunggulan */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Keunggulan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Terpercaya</h3>
              <p className="text-gray-600">Rekam jejak yang baik dalam melayani klien dengan integritas tinggi</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cepat & Efisien</h3>
              <p className="text-gray-600">Pelayanan yang responsif dan penyelesaian tepat waktu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Profesional</h3>
              <p className="text-gray-600">Tim bersertifikat dengan pengetahuan mendalam tentang regulasi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Layanan Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Layanan Kami</h2>
        <p className="text-center text-gray-600 mb-8">Pilih layanan yang sesuai dengan kebutuhan Anda</p>

        {/* Category Descriptions */}
        {selectedKategori === 'perpajakan' && (
          <div className="bg-blue-50 border-l-4 border-[#042C53] p-6 rounded-r-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Layanan Perpajakan</h3>
            <p className="text-gray-600 mb-4">Layanan perpajakan terpadu yang memastikan bisnis Anda aman, teratur, dan berjalan sesuai regulasi</p>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Konsultasi Perpajakan Profesional untuk Semua Jenis Bisnis</h4>
              <p className="text-gray-600 text-sm mb-4">
                Kami menyediakan layanan konsultasi perpajakan yang komprehensif untuk membantu bisnis Anda mengelola kewajiban pajak secara efisien dan sesuai dengan peraturan perpajakan Indonesia yang berlaku.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Tim konsultan pajak bersertifikat kami memiliki pengalaman lebih dari 15 tahun dalam menangani berbagai kasus perpajakan, mulai dari perencanaan pajak, pelaporan SPT, tax review, hingga pendampingan pemeriksaan dan penyelesaian sengketa pajak.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Telah melayani 100+ klien dari berbagai industri</li>
                <li>✓ Tim konsultan bersertifikat dan berpengalaman</li>
                <li>✓ Melayani UMKM, perusahaan menengah, hingga korporasi besar</li>
              </ul>
            </div>
          </div>
        )}

        {selectedKategori === 'akuntansi' && (
          <div className="bg-blue-50 border-l-4 border-[#042C53] p-6 rounded-r-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Layanan Akuntansi</h3>
            <p className="text-gray-600 mb-4">Pembukuan dan akuntansi yang tertata, transparan, dan siap mendukung strategi pertumbuhan jangka panjang bisnis Anda.</p>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Layanan Akuntansi dan Pembukuan Profesional</h4>
              <p className="text-gray-600 text-sm mb-4">
                Kami menyediakan layanan akuntansi dan pembukuan yang lengkap untuk membantu bisnis Anda mengelola keuangan dengan lebih baik dan transparan. Dari pencatatan transaksi harian hingga penyusunan laporan keuangan audit, tim akuntan profesional kami siap memberikan solusi terbaik.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Dengan pengalaman menangani berbagai skala bisnis dari UMKM hingga perusahaan besar, kami memahami kebutuhan akuntansi yang berbeda-beda dan menyediakan layanan yang disesuaikan dengan standar akuntansi Indonesia (SAK) dan kebutuhan spesifik bisnis Anda.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Akuntan profesional bersertifikat dan berpengalaman</li>
                <li>✓ Laporan keuangan sesuai standar akuntansi (SAK)</li>
                <li>✓ Software akuntansi modern dan sistem pelaporan real-time</li>
              </ul>
            </div>
          </div>
        )}

        {selectedKategori === 'lainnya' && (
          <div className="bg-blue-50 border-l-4 border-[#042C53] p-6 rounded-r-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Layanan Administratif & Legalitas</h3>
            <p className="text-gray-600 mb-4">Solusi bisnis komprehensif untuk kebutuhan administrasi dan legalitas perusahaan Anda</p>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Konsultasi Administratif dan Legalitas Profesional untuk Semua Jenis Bisnis</h4>
              <p className="text-gray-600 text-sm mb-4">
                Kami menyediakan layanan pendukung bisnis seperti penyusunan SOP untuk memastikan alur kerja lebih terstruktur, serta Assistance Tax Document (ATD) yang membantu pengelolaan dokumen perpajakan agar tetap rapi dan sesuai ketentuan. Layanan ini dirancang untuk meningkatkan efisiensi operasional dan meminimalkan risiko administratif.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Kami juga menawarkan Financial Due Diligence (FDD) guna menilai kesehatan finansial perusahaan sebelum pengambilan keputusan strategis, serta layanan Restructuring untuk menata ulang struktur bisnis agar lebih efisien dan siap berkembang. Dengan pendekatan profesional, kami mendukung bisnis Anda agar tetap kuat dan kompetitif.
              </p>
            </div>
          </div>
        )}

        {/* Kategori Filter */}
      <div className="flex gap-4 mb-8 flex-wrap">
        {kategoriList.map(kategori => (
          <button
            key={kategori}
            onClick={() => setSelectedKategori(kategori)}
            className={`px-4 py-2 rounded-lg capitalize ${
              selectedKategori === kategori
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {kategori === 'all' ? 'Semua' : kategori}
          </button>
        ))}
      </div>

      {/* Layanan Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLayanan.map(layanan => (
          <Link
            key={layanan.id}
            to={`/layanan/${layanan.slug}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            {layanan.foto && (
              <img
                src={layanan.foto}
                alt={layanan.nama}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{layanan.nama}</h2>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm capitalize mb-3">
                {layanan.kategori}
              </span>
              <p className="text-gray-600 line-clamp-3">{layanan.deskripsi_singkat}</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredLayanan.length === 0 && (
        <p className="text-center text-gray-500 py-8">Tidak ada layanan ditemukan</p>
      )}
      </div>

      {/* CTA Konsultasi */}
      <div className="bg-gradient-to-r from-[#042C53] to-[#0A4278] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Berkonsultasi?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk mendapatkan solusi terbaik untuk kebutuhan perpajakan dan akuntansi Anda
          </p>
          <Link
            to="/kontak"
            className="inline-block bg-white text-[#042C53] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
  )
}