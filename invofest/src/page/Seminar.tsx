import Hero from "../components/Heroo";
import SpeakerCard from "../components/SpeakerCard";
import JadwalEvent from "../components/JadwalEvent";
import { Calendar, Clock, MapPin, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Seminar() {
    const navigate = useNavigate();

    const speakers = [
    {
      nama: "Dery Agung Triyadi",
      materi: " ",
      jabatan: "Aws Indonesia",
      foto: "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png"
    },
    {
      nama: "Sowam Habibi",
      materi: " ",
      jabatan: "Google Indonesia",
      foto: "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png"
    },
  ];

  const seminarInfo = [
  {
    value: "Kamis, 27 November 2025",
    icon: <Calendar size={28} />,
  },
  {
    value: "08.00 - 12.00 WIB",
    icon: <Clock size={28} />,
  },
  {
    value: "Aula Gedung C",
    icon: <MapPin size={28} />,
  },
  {
    value: "Kampus 1 (Mataram) Universitas Harkat Negeri",
    icon: <Building size={28} />,
  },
];

    return (
        <div>
            <Hero
              title="IT Seminar"
              slogan={`"Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif"`}
              description={
                <>
                  Seminar nasional yang membahas strategi dan arsitektur teknologi untuk 
                  menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang 
                  sinergis.Yang bertujuan mengubah paradigma dari persaingan menjadi 
                  kolaborasi, serta meningkatkan pengetahuan peserta dalam merancang 
                  teknologi AI yang berpusat pada manusia.
                </>
              }
                image="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
                primaryBtn={{ 
                    title: "Daftar Sekarang", 
                    onClick: () => navigate("/seminar")
                }}
            />

            <div className="bg-[#FFEDF3] text-center px-8 py-10 mt-16">
                <h2 className="text-5xl font-semibold text-[#76153C] mb-6">
                    Tentang IT SEMINAR
                </h2>
                <p className="text-gray-600 text-2xl leading-normal mx-auto mb-10">
                    Seminar bertajuk “Human-AI Integration: Merancang Arsitektur Kolaboratif, Di tengah pesatnya kemajuan kecerdasan buatan 
                    (AI), narasi yang sering muncul adalah tentang persaingan antara manusia dan mesin. Kekhawatiran akan penggantian peran 
                    manusia oleh teknologi cerdas menjadi diskusi utama di berbagai sektor. Namun, bagaimana jika kita mengubah paradigma 
                    tersebut? Seminar Nasional Teknologi Informasi ini hadir untuk menjawab tantangan itu dengan mengangkat tema "Human-AI 
                    Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.” Kami bertujuan untuk menggeser fokus dari ketakutan akan 
                    kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, 
                    etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas 
                    manusia—bukan sebagai pengganti.
                </p>
            </div>

            <section id = "speaker" className="bg-white py-16 mt-24">
                <div className="max-w-7xl mx-auto px-8">
                    <h1 className="text-5xl font-semibold text-center mb-20 text-[#76153C]">
                        Temui Pembicara Khusus Kami
                    </h1>

                <div className="grid md:grid-cols-2 gap-8 justify-items-center">
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

            <JadwalEvent items={seminarInfo} />
            
            
        </div>
    );
}