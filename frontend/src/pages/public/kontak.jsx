import {
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react'

export default function Kontak() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#042C53] py-20 px-6 text-center">
        <h1 className="text-4xl font-semibold text-white mb-4">
          Kontak
        </h1>
        <p className="text-blue-200 max-w-2xl mx-auto">
          Kami siap membantu Anda dengan konsultasi profesional untuk
          kebutuhan perpajakan dan akuntansi.
        </p>
      </section>

      {/* Kontak */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-[#042C53] mb-6">
              Kirim Pesan
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#185FA5]"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Nama Perusahaan
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Bidang Usaha
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Nomor Whatsapp
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Alamat Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Pesan (Opsional)
                </label>
                <textarea
                  rows="5"
                  className="w-full border rounded-lg px-4 py-3"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#185FA5] text-white px-6 py-3 rounded-lg hover:bg-[#0C447C] transition"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Informasi */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-sm mb-6">
              <h2 className="text-2xl font-semibold text-[#042C53] mb-6">
                Informasi Kontak
              </h2>

              <div className="space-y-6">

                <div className="flex gap-4">
                  <MapPin className="text-[#185FA5] w-6 h-6" />
                  <div>
                    <h3 className="font-semibold mb-1">Alamat</h3>
                    <p className="text-gray-600">
                      Ruko Casa De Parco No. 20,
                      Sampora, Cisauk,
                      Tangerang Regency,
                      Banten 15345
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-[#185FA5] w-6 h-6" />
                  <div>
                    <h3 className="font-semibold mb-1">Whatsapp</h3>
                    <a
                      href="https://wa.me/6287716871333"
                      className="text-[#185FA5]"
                    >
                      0877-1687-1333
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-[#185FA5] w-6 h-6" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:marketing@trimastersolusindo.id"
                      className="text-[#185FA5]"
                    >
                      marketing@trimastersolusindo.id
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-[#185FA5] w-6 h-6" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Jam Operasional
                    </h3>
                    <p className="text-gray-600">
                      Senin – Jum'at: 09:00 – 17:00
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Sabtu, Minggu dan Hari Libur Nasional Tutup
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#042C53] text-white p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">
                Butuh Konsultasi Cepat?
              </h3>
              <p className="text-blue-200 mb-5">
                Hubungi kami langsung melalui WhatsApp untuk mendapatkan
                konsultasi awal secara gratis.
              </p>

              <a
                href="https://wa.me/6287716871333"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#1D9E75] px-5 py-3 rounded-lg"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#042C53] mb-8">
            Lokasi Kami
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Lokasi Tri Master Solusindo"
              src="https://www.google.com/maps?q=Casa+De+Parco+Sampora+Cisauk+Tangerang&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}