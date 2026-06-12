import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [layanan, setLayanan] = useState([])
  const [artikel, setArtikel] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8000/api/layanan/').then(res => res.json()),
      fetch('http://localhost:8000/api/artikel/').then(res => res.json())
    ])
      .then(([layananData, artikelData]) => {
        setLayanan(layananData)
        setArtikel(artikelData)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching data:', err)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="container mx-auto py-8">Loading...</div>

  return (
    <main>
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-r from-[#042C53] to-[#0A4278] text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Konsultan Pajak & Akuntansi Profesional</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Membantu bisnis Anda mengelola perpajakan dan laporan keuangan secara tepat, efisien, dan sesuai regulasi yang berlaku.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/layanan" className="bg-white text-[#042C53] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Lihat Layanan
            </Link>
            <Link to="/kontak" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#042C53] transition-colors">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Tentang Singkat */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Tentang Tri Master Solusindo</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Tri Master Solusindo merupakan firma konsultan pajak dan akuntansi yang membantu perusahaan dan pelaku usaha dalam memenuhi kewajiban perpajakan serta mengelola laporan keuangan secara profesional.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Dengan pengalaman lebih dari 10 tahun, kami telah mendampingi berbagai jenis usaha dari UMKM hingga perusahaan skala menengah dan besar.
          </p>
          <Link to="/tentang" className="text-[#042C53] font-semibold hover:underline">
            Selengkapnya →
          </Link>
        </div>
      </section>

      {/* 3. Statistik */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#042C53] mb-2">10+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#042C53] mb-2">50+</div>
              <div className="text-gray-600">Klien Aktif</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#042C53] mb-2">98%</div>
              <div className="text-gray-600">Kepuasan Pelanggan</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Layanan Unggulan */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Layanan Unggulan</h2>
          <p className="text-center text-gray-600 mb-8">Solusi terbaik untuk kebutuhan perpajakan dan akuntansi Anda</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {layanan.slice(0, 4).map(item => (
              <Link
                key={item.id}
                to={`/layanan/${item.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{item.nama}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{item.deskripsi_singkat}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/layanan" className="text-[#042C53] font-semibold hover:underline">
              Lihat Semua Layanan →
            </Link>
          </div>
        </div>
      </section>

      {/* 4.5 Jenis Pajak */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Jenis Pajak</h2>
          <p className="text-center text-gray-600 mb-8">Informasi lengkap mengenai berbagai jenis pajak yang perlu Anda ketahui</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { name: 'PPh 21', desc: 'Pajak penghasilan pegawai' },
              { name: 'PPh 22', desc: 'Pajak pemotongan impor' },
              { name: 'PPh 23', desc: 'Pajak atas jasa' },
              { name: 'PPh 25', desc: 'Pajak penghasilan badan' },
              { name: 'PPh 26', desc: 'Pajak dividen luar negeri' },
              { name: 'PPh 29', desc: 'Pajak atas royalti' },
              { name: 'PPh 4 (2)', desc: 'Pajak final konstruksi' },
              { name: 'PPh UMKM', desc: 'Pajak usaha mikro kecil' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-[#042C53] mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/artikel" className="text-[#042C53] font-semibold hover:underline">
              Lebih lanjut →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Mengapa Memilih Kami */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Mengapa Memilih Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Konsultan Bersertifikat', desc: 'Tim profesional dengan sertifikasi resmi' },
              { title: 'Pengalaman Multi Industri', desc: 'Melayani berbagai jenis industri' },
              { title: 'Update Regulasi Terbaru', desc: 'Selalu mengikuti perubahan regulasi' },
              { title: 'Teknologi Modern', desc: 'Sistem terintegrasi dan efisien' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#042C53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Alur Kerja */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Alur Kerja</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Konsultasi Awal', desc: 'Diskusi kebutuhan Anda' },
              { step: '02', title: 'Analisis Kebutuhan', desc: 'Evaluasi situasi keuangan' },
              { step: '03', title: 'Pelaksanaan Layanan', desc: 'Implementasi solusi' },
              { step: '04', title: 'Pendampingan', desc: 'Support berkelanjutan' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-200 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Artikel Terbaru */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Artikel Terbaru</h2>
          <p className="text-center text-gray-600 mb-8">Tips dan informasi seputar perpajakan dan akuntansi</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {artikel.slice(0, 3).map(item => (
              <Link
                key={item.id}
                to={`/artikel/${item.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{item.judul}</h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{item.ringkasan}</p>
                <span className="text-xs text-gray-400">{new Date(item.tanggal).toLocaleDateString('id-ID')}</span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/artikel" className="text-[#042C53] font-semibold hover:underline">
              Lihat Semua Artikel
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CTA WhatsApp */}
      <section className="bg-gradient-to-r from-[#042C53] to-[#0A4278] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Mengelola Pajak dan Keuangan Bisnis Anda?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan perpajakan dan akuntansi Anda bersama tim profesional Tri Master Solusindo.
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}