import Faq from "./Faq";

const faqData = [
    {
        question: "Apa itu Invofest?",
        answer: 'Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.',
    },
    {
        question: "Kapan dan di mana Invofest akan diselenggarakan",
        answer: "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online.",
    },
    {
        question: "Apakah ada biaya pendaftaran di INVOFEST?",
        answer: "Semua kegiatan dipastikan berbayar ya teman-teman.",
    },
    {
        question: "Bagaimana saya mengetahui pemenang kompetisi?",
        answer: "Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri.",
    },
    {
        question: "Apa yang didapat pemenang dalam kompetisi?",
        answer: "Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat.",
    },
    {
        question: "Bagaiman cara mendaftar event?",
        answer: "Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda ingin ikuti atau scroll kebagian bawah halaman beranda dengan klik mendaftar pada salah satu eventnya, jika sudah maka diarahkan ke halaman detail event dan klik tombol 'Registrasi' maka akan diarahkan ke google form pengisian pendaftaran event yang diikuti.",
    },
]

const left = faqData.slice(0,3);
const right = faqData.slice(3);

const FaqSection = () => {
    return (
        <section className="bg-white py-16">
                <div className="px-10">
                    <p className="text-gray-600 text-xl font-bold mb-2 text-center">
                        FAQ
                    </p>

                    <h2 className="text-lg md:text-4xl font-bold text-gray-700 leading-tight text-center">
                        Punya Pertanyaan? Lihat {" "} <br />
                        <span className="text-[#76153C]">
                            Disini
                        </span>
                    </h2>

                    <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-normal text-center mb-16">
                        Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat <br /> 
                        daftar pertanyaan di bawah ini.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6">

                        {/* KIRI */}
                        <div className="flex-1 flex flex-col gap-6">
                            {left.map((item, i) => (
                                <Faq key={i} {...item} />
                            ))}
                        </div>

                        {/* KANAN */}
                        <div className="flex-1 flex flex-col gap-6">
                            {right.map((item, i) => (
                                <Faq key={i} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default FaqSection;