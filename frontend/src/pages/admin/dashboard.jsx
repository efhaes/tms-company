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

  // Data states
  const [orders, setOrders] = useState([])
  const [profil, setProfil] = useState(null)
  const [profilForm, setProfilForm] = useState({
    nama_perusahaan: '', deskripsi_singkat: ''
  })
  const [fotoProfil, setFotoProfil] = useState(null)
  const [fotoStruktur, setFotoStruktur] = useState(null)

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

  const loadOrders = async () => {
    try {
      const res = await api.get('/orders/')
      setOrders(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  const loadProfil = async () => {
    try {
      const res = await api.get('/profil/')
      if (res.data && res.data.length > 0) {
        setProfil(res.data[0])
        setProfilForm({
          nama_perusahaan: res.data[0].nama_perusahaan,
          deskripsi_singkat: res.data[0].deskripsi_singkat
        })
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (activeTab === 'orders') loadOrders()
    if (activeTab === 'profil') loadProfil()
  }, [activeTab])

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    navigate('/admin/login')
  }

  const handleProfilSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('nama_perusahaan', profilForm.nama_perusahaan)
    formData.append('deskripsi_singkat', profilForm.deskripsi_singkat)
    if (fotoProfil) formData.append('foto_perusahaan', fotoProfil)
    if (fotoStruktur) formData.append('foto_struktur_organisasi', fotoStruktur)

    try {
      if (profil?.id) {
        await api.patch(`/profil/${profil.id}/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      } else {
        await api.post(`/profil/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      }
      alert('Profil berhasil disimpan')
      loadProfil()
    } catch (err) {
      console.error(err)
      alert('Gagal menyimpan profil')
    }
  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">TMS Admin Dashboard</h1>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Logout</button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6 overflow-x-auto">
              {['overview', 'layanan', 'artikel', 'orders', 'templates', 'seo', 'profil', 'onedrive'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 border-b-2 font-medium text-sm capitalize`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6 overflow-x-auto">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">{stats.layanan}</div>
                    <div className="text-sm text-blue-800">Layanan</div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">{stats.orders}</div>
                    <div className="text-sm text-purple-800">Orders Masuk</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Data Pesanan / Leads</h2>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WhatsApp</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Layanan</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map(order => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(order.created_at).toLocaleDateString('id-ID')}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.nama}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                           <a href={`https://wa.me/${order.nomor_wa.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{order.nomor_wa}</a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.layanan_nama}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'profil' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Profil Perusahaan & Struktur Organisasi</h2>
                <form onSubmit={handleProfilSubmit} className="space-y-6 max-w-2xl">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nama Perusahaan</label>
                    <input type="text" value={profilForm.nama_perusahaan} onChange={e => setProfilForm({...profilForm, nama_perusahaan: e.target.value})} className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Deskripsi Singkat</label>
                    <textarea rows="4" value={profilForm.deskripsi_singkat} onChange={e => setProfilForm({...profilForm, deskripsi_singkat: e.target.value})} className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Foto Profil / Logo</label>
                    <input type="file" accept="image/*" onChange={e => setFotoProfil(e.target.files[0])} className="mt-1 block w-full" />
                    {profil?.foto_perusahaan && <img src={profil.foto_perusahaan} alt="Profil" className="mt-2 h-20" />}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Foto Struktur Organisasi</label>
                    <input type="file" accept="image/*" onChange={e => setFotoStruktur(e.target.files[0])} className="mt-1 block w-full" />
                    {profil?.foto_struktur_organisasi && <img src={profil.foto_struktur_organisasi} alt="Struktur" className="mt-2 h-32" />}
                  </div>
                  <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700">Simpan Profil</button>
                </form>
              </div>
            )}

            {['layanan', 'artikel', 'templates', 'seo', 'onedrive'].includes(activeTab) && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4 capitalize">Manajemen {activeTab}</h2>
                <p className="text-gray-600 mb-4">Untuk mengelola {activeTab}, gunakan panel Django Admin yang memiliki fungsionalitas penuh.</p>
                <a href={`http://127.0.0.1:8000/admin/tms/`} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Buka Django Admin
                </a>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}