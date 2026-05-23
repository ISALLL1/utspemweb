import Hero from "../components/Heroo";
import SpeakerCard from "../components/SpeakerCard";
import JadwalEvent from "../components/JadwalEvent";
import { Calendar, Clock, MapPin, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Talkshow() {
    const navigate = useNavigate();

    const speakers = [
    {
      nama: "Moh. Ichsan Maulana",
      materi: "",
      jabatan: "Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera",
      foto: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png"
    },
    {
      nama: "M. Zaim Zamzami",
      materi: "",
      jabatan: "Programmer, PT. Pertamina Drilling Service Indonesia",
      foto: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png"
    },
    {
      nama: "Daffa Zuhdan Muhtar",
      materi: "",
      jabatan: "Android Developer, PT. Astra Internasional",
      foto: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png"
    },
    {
      nama: "Bayu Adi Prasetiyo",
      materi: "",
      jabatan: "Software Engineer, KOMPAS.ID",
      foto: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png"
    },
  ];

  const seminarInfo = [
  {
    value: "Senin, 24 November 2025",
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

    return(
        <div>
            <Hero
              title="IT Talkshow"
              slogan={`"Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan"`}
              description={
                <>
                  Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa 
                  Depan” Sebuah diskusi interaktif yang mengeksplorasi cara 
                  mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan 
                  kreativitas ke dalam pengembangan kecerdasan buatan. yang bertujuan 
                  menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai 
                  alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai 
                  penggantinya.
                </>
              }
                image="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
                primaryBtn={{ 
                    title: "Daftar Sekarang", 
                    onClick: () => navigate("/talkshow")
                }}
            />

            <div className="bg-[#FFEDF3] text-center px-8 py-10 mt-16">
                <h2 className="text-5xl font-semibold text-[#76153C] mb-6">
                    Tentang IT Talkshow
                </h2>
                <p className="text-gray-600 text-2xl leading-normal mx-auto mb-10">
                    Seiring teknologi, khususnya kecerdasan buatan (AI), yang semakin meresap ke dalam setiap aspek kehidupan kita, muncul 
                    sebuah pertanyaan fundamental: Apakah kita sedang menciptakan teknologi yang melayani manusia, atau justru sebaliknya? 
                    Untuk menjawab pertanyaan tersebut, kami mempersembahkan talkshow berskala nasional: “Humanizing Technology: 
                    Kolaborasi Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang 
                    dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, 
                    dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi 
                    pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia.
                </p>
            </div>

            <section id = "speaker" className="bg-white py-16 mt-24">
                <div className="max-w-7xl mx-auto px-8">
                    <h1 className="text-4xl font-bold text-center mb-20 text-[#76153C]">
                        Temui Pembicara Khusus Kami
                    </h1>

                <div className="grid md:grid-cols-4 gap-8 justify-items-center">
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
    )
}