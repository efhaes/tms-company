import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

export default function Dashboard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [stats, setStats] = useState({
    layanan: 0,
    artikel: 0,
    pesan: 0,
    orders: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (!token) {
      navigate('/admin/login')
      return
    }

    fetchStats()
  }, [navigate])

  const fetchStats = async () => {
    try {
      const [layananRes, artikelRes, pesanRes, ordersRes] = await Promise.all([
        api.get('/layanan/'),
        api.get('/artikel/'),
        api.get('/kontak/inbox/'),
        api.get('/orders/')
      ])

      setStats({
        layanan: layananRes.data.length,
        artikel: artikelRes.data.length,
        pesan: pesanRes.data.length,
        orders: ordersRes.data.length
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    navigate('/admin/login')
  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">TMS Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['overview', 'layanan', 'artikel', 'orders', 'templates', 'seo', 'profil', 'onedrive'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">{stats.layanan}</div>
                    <div className="text-sm text-blue-800">Layanan</div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">{stats.artikel}</div>
                    <div className="text-sm text-green-800">Artikel</div>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-600">{stats.pesan}</div>
                    <div className="text-sm text-yellow-800">Pesan Kontak</div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">{stats.orders}</div>
                    <div className="text-sm text-purple-800">Orders</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'layanan' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Manajemen Layanan</h2>
                <p className="text-gray-600">Kelola layanan yang ditawarkan oleh TMS Company.</p>
                <div className="mt-4">
                  <a
                    href="http://127.0.0.1:8000/admin/tms/layanan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Buka Django Admin
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'artikel' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Manajemen Artikel</h2>
                <p className="text-gray-600">Kelola artikel dan blog post.</p>
                <div className="mt-4">
                  <a
                    href="http://127.0.0.1:8000/admin/tms/artikel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Buka Django Admin
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Manajemen Orders</h2>
                <p className="text-gray-600">Kelola pesanan layanan yang masuk.</p>
                <div className="mt-4">
                  <a
                    href="http://127.0.0.1:8000/admin/tms/orderlayanan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Buka Django Admin
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'templates' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Manajemen Template WhatsApp</h2>
                <p className="text-gray-600">Kelola template pesan WhatsApp untuk setiap layanan.</p>
                <div className="mt-4">
                  <a
                    href="http://127.0.0.1:8000/admin/tms/whatsapptemplate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Buka Django Admin
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'seo' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Pengaturan SEO</h2>
                <p className="text-gray-600">Kelola pengaturan SEO untuk setiap layanan.</p>
                <div className="mt-4">
                  <a
                    href="http://127.0.0.1:8000/admin/tms/pengaturanseo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Buka Django Admin
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'profil' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Profil Perusahaan</h2>
                <p className="text-gray-600">Kelola profil perusahaan dan struktur organisasi.</p>
                <div className="mt-4">
                  <a
                    href="http://127.0.0.1:8000/admin/tms/profilperusahaan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Buka Django Admin
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'onedrive' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">OneDrive Login URLs</h2>
                <p className="text-gray-600">Kelola URL login OneDrive untuk akses admin.</p>
                <div className="mt-4">
                  <a
                    href="http://127.0.0.1:8000/admin/tms/onedriveloginurl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Buka Django Admin
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}