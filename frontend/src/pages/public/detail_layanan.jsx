import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

export default function DetailLayanan() {
  const { slug } = useParams()
  const [layanan, setLayanan] = useState(null)
  const [loading, setLoading] = useState(true)

  // Form states
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    nama: '', email: '', nomor_wa: '', pesan: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [waMessage, setWaMessage] = useState('')
  const [companyProfile, setCompanyProfile] = useState(null)

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

    // Fetch company profile for WhatsApp number
    fetch(`http://localhost:8000/api/profil/`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setCompanyProfile(data[0])
        }
      })
      .catch(err => console.error(err))
  }, [slug])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmitPesan = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const payload = {
        ...formData,
        layanan: layanan.id
      }
      const response = await fetch('http://localhost:8000/api/orders/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      if (data.wa_message) {
        setWaMessage(data.wa_message)
      } else {
        alert('Pesanan berhasil disimpan, namun template WA tidak tersedia. Tim kami akan menghubungi Anda.')
        setShowForm(false)
        setFormData({ nama: '', email: '', nomor_wa: '', pesan: '' })
      }
    } catch (err) {
      console.error(err)
      alert('Terjadi kesalahan saat memproses pesanan')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppRedirect = () => {
    let phone = companyProfile?.nomor_wa || '6281234567890'
    // clean phone number (only digits)
    phone = phone.replace(/\D/g, '')
    // if starts with 0, replace with 62
    if (phone.startsWith('0')) {
      phone = '62' + phone.substring(1)
    }
    const encodedMessage = encodeURIComponent(waMessage)
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
    setShowForm(false)
    setWaMessage('')
    setFormData({ nama: '', email: '', nomor_wa: '', pesan: '' })
  }

  if (loading) return <div className="container mx-auto py-8">Loading...</div>
  if (!layanan) return <div className="container mx-auto py-8">Layanan tidak ditemukan</div>

  const seo = layanan.seo_settings || {}

  return (
    <div>
      <Helmet>
        <title>{seo.meta_title || layanan.nama}</title>
        <meta name="description" content={seo.meta_description || layanan.deskripsi_singkat} />
        {seo.meta_keywords && <meta name="keywords" content={seo.meta_keywords} />}
        {seo.canonical_url && <link rel="canonical" href={seo.canonical_url} />}
        {seo.og_title && <meta property="og:title" content={seo.og_title} />}
        {seo.og_description && <meta property="og:description" content={seo.og_description} />}
        {seo.og_image && <meta property="og:image" content={seo.og_image} />}
      </Helmet>

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
              
              {!showForm ? (
                <>
                  <button
                    onClick={() => setShowForm(true)}
                    className="block w-full bg-[#25D366] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors mb-3 cursor-pointer"
                  >
                    Pesan Layanan Sekarang
                  </button>
                  <Link
                    to="/kontak"
                    className="block w-full border-2 border-[#042C53] text-[#042C53] text-center py-3 rounded-lg font-semibold hover:bg-[#042C53] hover:text-white transition-colors"
                  >
                    Hubungi Kami
                  </Link>
                </>
              ) : (
                <div className="bg-gray-50 p-4 rounded-lg">
                  {waMessage ? (
                    <div>
                      <h4 className="font-bold text-green-600 mb-2">Pesanan Tersimpan!</h4>
                      <p className="text-sm text-gray-600 mb-4">Lanjutkan mengirim detail pesanan via WhatsApp.</p>
                      <button
                        onClick={handleWhatsAppRedirect}
                        className="w-full bg-[#25D366] text-white py-2 rounded font-semibold hover:bg-[#128C7E]"
                      >
                        Kirim ke WhatsApp
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitPesan} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                        <input type="text" name="nama" required value={formData.nama} onChange={handleInputChange} className="w-full px-3 py-2 border rounded focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 border rounded focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
                        <input type="text" name="nomor_wa" required value={formData.nomor_wa} onChange={handleInputChange} className="w-full px-3 py-2 border rounded focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Keterangan Tambahan</label>
                        <textarea name="pesan" rows="3" value={formData.pesan} onChange={handleInputChange} className="w-full px-3 py-2 border rounded focus:ring-blue-500 focus:border-blue-500"></textarea>
                      </div>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => setShowForm(false)} className="w-1/3 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-100">Batal</button>
                        <button type="submit" disabled={isSubmitting} className="w-2/3 bg-[#042C53] text-white py-2 rounded hover:bg-[#0A4278]">
                          {isSubmitting ? 'Memproses...' : 'Kirim'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
