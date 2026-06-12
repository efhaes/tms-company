import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./artikel.css"

const BASE_URL = "http://localhost:8000"

export default function Artikel() {
  const [artikelList, setArtikelList] = useState([])
  const [loading, setLoading]         = useState(true)
  const [error, setError]             = useState(null)

  useEffect(() => {
    fetch(`${BASE_URL}/api/artikel/`)
      .then(res => res.json())
      .then(data => {
        setArtikelList(Array.isArray(data) ? data : data.results)
        setLoading(false)
      })
      .catch(() => {
        setError("Gagal memuat artikel")
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="artikel-loading">Memuat artikel...</p>
  if (error)   return <p className="artikel-error">{error}</p>

  return (
    <div className="artikel-page">
      <div className="artikel-header">
        <h1>Artikel & Panduan</h1>
        <p className="subtitle">Informasi seputar perpajakan, akuntansi, dan keuangan bisnis</p>
      </div>

      <div className="artikel-grid">
        {artikelList.map(artikel => (
          <Link key={artikel.id} to={`/artikel/${artikel.slug}`} className="artikel-card">
            <div className="artikel-card-thumb">
              {artikel.thumbnail ? (
                <img
                  src={artikel.thumbnail.startsWith("http")
                    ? artikel.thumbnail
                    : `${BASE_URL}${artikel.thumbnail}`
                  }
                  alt={artikel.judul}
                />
              ) : (
                <div className="artikel-card-thumb-placeholder">
                  <span>📄</span>
                </div>
              )}
            </div>
            <div className="artikel-card-body">
              <time>{new Date(artikel.tanggal).toLocaleDateString("id-ID", {
                day: "numeric", month: "long", year: "numeric"
              })}</time>
              <h2>{artikel.judul}</h2>
              <p>{artikel.ringkasan}</p>
            </div>
            <div className="artikel-card-footer">
              <span className="author">Fattah Hiday</span>
              <span className="read-more">Baca selengkapnya →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}