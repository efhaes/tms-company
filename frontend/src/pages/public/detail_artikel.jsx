import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "./artikel-detail.css"

const BASE_URL = "http://localhost:8000"

export default function ArtikelDetail() {
  const { slug }              = useParams()
  const navigate              = useNavigate()
  const [artikel, setArtikel] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${BASE_URL}/api/artikel/${slug}/`)
      .then(async res => {
        if (res.status === 404) {
          navigate("/artikel")
          return
        }
        const data = await res.json()
        setArtikel(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [slug, navigate])

  if (loading) return <p>Memuat...</p>
  if (!artikel) return null

  return (
    <article>
      <h1>{artikel.judul}</h1>
      <time>{new Date(artikel.tanggal).toLocaleDateString("id-ID", {
        day: "numeric", month: "long", year: "numeric"
      })}</time>

      {artikel.thumbnail && (
        <img
          src={artikel.thumbnail.startsWith("http")
            ? artikel.thumbnail
            : `${BASE_URL}${artikel.thumbnail}`
          }
          alt={artikel.judul}
        />
      )}

      <div
        className="artikel-konten"
        dangerouslySetInnerHTML={{ __html: artikel.konten }}
      />
    </article>
  )
} 