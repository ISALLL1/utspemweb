import Header from "../components/Header";
import Hero from "../components/Heroo";
import SpeakerCard from "../components/SpeakerCard";
import EventCard from "../components/EventCard";
import Faq from "../components/Faq";
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  const speakers = [
    {
      nama: "Lhuqita Fazry",
      materi: "Mobile Development",
      jabatan: "Developer Founder Rumah Coding Indonesia",
      foto: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png"
    },
    {
      nama: "M. Dendi Purwanto",
      materi: "Artificial Intelligence",
      jabatan: "Software Engineer, PT. Mayar Kernel Supernova",
      foto: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png"
    },
    {
      nama: "Danang Avan M",
      materi: "Cyber Security",
      jabatan: "Security Analyst, Founder | Contributor TegalSec",
      foto: "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png"
    },
  ];
  return (
    <>
      <Header />
      <Hero
        titleImage="https://www.invofest-harkatnegeri.com/assets/text-image.png"
        description={
          <>
            Invofest (Informatics Vocational Festival) adalah festival tahunan 
            yang bertujuan untuk menginspirasi dan memberdayakan generasi muda 
            Indonesia dalam menghadapi era digital.
            Dengan mengusung tema{" "}
            <strong>
              “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow”
            </strong>.
          </>
        }
        image="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
        primaryBtn={{ 
          title: "INFO SELENGKAPNYA", 
          onClick: () => navigate("/")
          }}
        secondaryBtn={{ 
          title:"HUBUNGI PANITIA", 
          onClick: () => navigate("/")
        }}

      />

      {/* SECTION PEMBICARA */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl font-bold text-center mb-20 text-[#76153C]">
            Temui Pembicara Khusus Kami
            </h1>

          <div className="grid grid-cols-3 gap-8">
            {speakers.map((item, index) => (
              <SpeakerCard 
              key={index}
              foto={item.foto}
              nama={item.nama}
              materi={item.materi}
              jabatan={item.jabatan}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION EVENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#76153C]">
            Tentang Invofest
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <EventCard 
            title="IT Seminar"
            deskripsi='Seminar nasional ini membahas "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif" untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.'
            />

            <EventCard 
            title="IT Talkshow"
            deskripsi='Talkshow "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan" membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.'
            />

            <EventCard 
            title="IT Competition"
            deskripsi='Kompetisi "From Creation to Innovation" mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.'
            />

            <EventCard 
            title="IT Workshop"
            deskripsi='Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era" membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.'
            />
          </div>
        </div>
      </section>

      {/* SECTION FAQ */}
      <section className="bg-white py-16">
        <div className="px-10">
          
          <h2 className="text-4xl font-bold text-center mb-10 text-[#76153C]">
            Punya Pertanyaan? Lihat Disini
          </h2>

          <div className="grid grid-cols-2 gap-6 ">
            <Faq 
            question="Apa itu Invofest?"
            answer='Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.'
            />

            <Faq 
            question="Kapan dan di mana Invofest akan diselenggarakan"
            answer="INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online."
            />

            <Faq 
            question="Apakah ada biaya pendaftaran di INVOFEST?"
            answer="Semua kegiatan dipastikan berbayar ya teman-teman."
            />

            <Faq 
            question="Bagaimana saya mengetahui pemenang kompetisi?"
            answer="Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri."
            />

            <Faq 
            question="Apa yang didapat pemenang dalam kompetisi?"
            answer="Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat."
            />

            <Faq 
            question="Bagaiman cara mendaftar event?"
            answer="Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda ingin ikuti atau scroll kebagian bawah halaman beranda dengan klik mendaftar pada salah satu eventnya, jika sudah maka diarahkan ke halaman detail event dan klik tombol 'Registrasi' maka akan diarahkan ke google form pengisian pendaftaran event yang diikuti."
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="text-center text-gray-300 text-sm mt-10">
          © 2026 Invofest. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;