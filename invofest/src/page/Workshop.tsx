import Hero from "../components/Heroo";
import SpeakerCard from "../components/SpeakerCard";
import ScheduleWorkshop from "../components/ScheduleWorkshop";
import { useNavigate } from "react-router-dom";

export default function Workshop() {

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

  const schedules = [
    {
      id: 1,
      topic: "Mobile Development",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
      svgIcon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="inline text-3xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
    },
    {
      id: 2,
      topic: "Artificial Intelligence",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.2",
      svgIcon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="inline text-3xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"></path></svg>
    },
    {
      id: 3,
      topic: "Cyber Security",
      date: "Rabu, 26 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
      svgIcon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="inline text-3xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"></path></svg>
    }
  ];

    return(
        <div>
            <Hero
              title="IT Workshop"
              slogan={`"AI for a Sustainable Future: The Role of Z Generation in the Digital Era"`}
              description={
                <>
                    IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk 
                    menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan 
                    alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata 
                    dan terukur di era digital.
                </>
              }
                image="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
                primaryBtn={{ 
                    title: "Daftar Sekarang", 
                    onClick: () => navigate("/talkshow")
                }}
            />

            <div className="bg-[#FFEDF3] text-center px-8 py-10 mt-16">
                <h2 className="text-5xl font-semibold text-[#76153C] mb-6">
                    Tentang IT Workshop
                </h2>
                <p className="text-gray-600 text-2xl leading-normal mx-auto mb-10">
                    Workshop “AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini didesain khusus untuk Generasi Z, para 
                    digital natives yang berada di persimpangan antara inovasi teknologi dan tantangan keberlanjutan global. Peserta akan diajak 
                    untuk menyelami bagaimana Kecerdasan Buatan (AI) bukan hanya sekadar teknologi canggih, tetapi juga alat yang ampuh 
                    untuk menciptakan solusi nyata bagi isu-isu lingkungan. Melalui sesi inspiratif, pengenalan konsep, dan praktik langsung 
                    (hands-on), workshop ini bertujuan memberdayakan Gen Z untuk menjadi agen perubahan di era digital, menggunakan 
                    keahlian mereka untuk masa depan bumi yang lebih baik.
                </p>
            </div>

            <section id = "speaker" className="bg-white py-16 mt-24">
                <div className="max-w-7xl mx-auto px-8">
                    <h1 className="text-5xl font-semibold text-center mb-20 text-[#76153C]">
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

            <div className="bg-[#FFEDF3] w-full h-fit relative">
                <div className="max-w-screen-xl mx-auto py-20">
                    <div className="w-full h-fit p-4 px-8">
                        <h1 className="font-semibold text-[#76153C] text-center text-5xl sm:text-4xl lg:text-5xl mb-5">Pelaksanaan IT Workshop</h1>
                    </div>
                    <div className="w-full max-w-6xl m-auto justify-center items-center flex flex-wrap gap-5">
                        {schedules.map((schedule) => (
                            <ScheduleWorkshop
                                key={schedule.id}
                                topic={schedule.topic}
                                date={schedule.date}
                                time={schedule.time}
                                location={schedule.location}
                                svgIcon={schedule.svgIcon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}