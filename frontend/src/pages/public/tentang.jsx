import {
  Users,
  Target,
  ShieldCheck,
  Award,
  Building2,
  Briefcase,
  FileText,
  Laptop
} from 'lucide-react'

export default function Tentang() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#042C53] py-20 px-6 text-center">
        <h1 className="text-4xl font-semibold text-white mb-4">
          Tentang Kami
        </h1>
        <p className="text-blue-200 max-w-2xl mx-auto">
          Partner terpercaya dalam mengelola perpajakan dan akuntansi bisnis Anda.
        </p>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#042C53] text-center mb-12">
            Struktur Organisasi
          </h2>

          <div className="flex flex-col items-center gap-6">
            <div className="bg-[#042C53] text-white px-8 py-5 rounded-xl shadow-lg">
              Direktur Utama
            </div>

            <div className="w-1 h-10 bg-gray-300"></div>

            <div className="grid md:grid-cols-3 gap-6 w-full">
              <div className="bg-gray-50 border rounded-xl p-5 text-center">
                <h3 className="font-semibold text-[#042C53]">
                  Manager Pajak
                </h3>
              </div>

              <div className="bg-gray-50 border rounded-xl p-5 text-center">
                <h3 className="font-semibold text-[#042C53]">
                  Manager Akuntansi
                </h3>
              </div>

              <div className="bg-gray-50 border rounded-xl p-5 text-center">
                <h3 className="font-semibold text-[#042C53]">
                  Manager Operasional
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profil */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#042C53] mb-6">
              Profil Perusahaan
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Tri Master Solusindo (TMS) adalah firma konsultan pajak dan
              akuntansi yang berdedikasi untuk memberikan solusi perpajakan
              dan keuangan terbaik bagi klien kami.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Didirikan oleh para profesional berpengalaman, kami telah
              melayani berbagai perusahaan dari berbagai skala industri.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Kami memahami bahwa setiap bisnis memiliki kebutuhan yang unik.
              Oleh karena itu, kami menyediakan solusi yang disesuaikan
              dengan kondisi dan tujuan bisnis Anda dengan tetap mematuhi
              peraturan perpajakan yang berlaku.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-8">
            <Building2 className="w-14 h-14 text-[#185FA5] mb-4" />
            <h3 className="text-xl font-semibold text-[#042C53] mb-3">
              Tri Master Solusindo
            </h3>
            <p className="text-gray-600">
              Konsultan Pajak & Akuntansi Profesional yang membantu
              perusahaan berkembang melalui pengelolaan perpajakan dan
              keuangan yang tepat.
            </p>
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-8 text-center border">
            <h3 className="text-5xl font-bold text-[#185FA5]">10+</h3>
            <p className="mt-3 text-gray-600">Tahun Pengalaman</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 text-center border">
            <h3 className="text-5xl font-bold text-[#185FA5]">50+</h3>
            <p className="mt-3 text-gray-600">Klien Aktif</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 text-center border">
            <h3 className="text-5xl font-bold text-[#185FA5]">98%</h3>
            <p className="mt-3 text-gray-600">Kepuasan Pelanggan</p>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Target className="w-10 h-10 text-[#185FA5] mb-4" />
            <h3 className="font-semibold text-xl mb-3">Visi</h3>
            <p className="text-gray-600">
              Menjadi firma konsultan pajak dan akuntansi terdepan yang
              dipercaya oleh pelaku bisnis di Indonesia.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Users className="w-10 h-10 text-[#185FA5] mb-4" />
            <h3 className="font-semibold text-xl mb-3">Misi</h3>
            <p className="text-gray-600">
              Memberikan layanan konsultasi perpajakan dan akuntansi
              berkualitas tinggi untuk membantu klien mencapai kepatuhan
              dan efisiensi bisnis.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <ShieldCheck className="w-10 h-10 text-[#185FA5] mb-4" />
            <h3 className="font-semibold text-xl mb-3">Integritas</h3>
            <p className="text-gray-600">
              Integritas, profesionalisme, dan kepercayaan menjadi
              fondasi utama dalam setiap layanan yang kami berikan.
            </p>
          </div>
        </div>
      </section>

      {/* Keahlian */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#042C53] mb-12">
            Keahlian Kami
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="border rounded-xl p-6">
              <Award className="w-10 h-10 text-[#185FA5] mb-4" />
              <h3 className="font-semibold mb-2">
                Konsultan Bersertifikat
              </h3>
              <p className="text-sm text-gray-600">
                Tim profesional dengan sertifikasi dan pengalaman luas.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <Briefcase className="w-10 h-10 text-[#185FA5] mb-4" />
              <h3 className="font-semibold mb-2">
                Multi Industri
              </h3>
              <p className="text-sm text-gray-600">
                Berpengalaman menangani berbagai sektor industri.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <FileText className="w-10 h-10 text-[#185FA5] mb-4" />
              <h3 className="font-semibold mb-2">
                Update Regulasi
              </h3>
              <p className="text-sm text-gray-600">
                Selalu mengikuti perkembangan aturan perpajakan terbaru.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <Laptop className="w-10 h-10 text-[#185FA5] mb-4" />
              <h3 className="font-semibold mb-2">
                Teknologi Modern
              </h3>
              <p className="text-sm text-gray-600">
                Menggunakan sistem dan software modern yang efisien.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}