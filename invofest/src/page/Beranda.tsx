import Hero from "../components/Heroo"
import Button from "../components/Button";
import EventCard from "../components/EventCard";
import { useNavigate } from "react-router-dom";

export default function Beranda() {
    const navigate = useNavigate();

    return (
        <div>
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

            {/* Section Tentang INVOFEST */}
            <section className="bg-[#FFEDF3] py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-5xl font-semibold text-[#76153C] mb-6">
                        Tentang INVOFEST
                    </h2>

                    <p className="text-gray-700 text-xl leading-normal mx-auto mb-10">
                        Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas 
                        Harkat Negeri, adalah festival tahunan yang bertujuan untuk menginspirasi dan 
                        memberdayakan generasi muda Indonesia dalam menghadapu era digital. Dengan 
                        mengusung tema {" "} <strong> “Beyond Limits, Beyond Intelligence: Innovate for a Smarter 
                        Tomorrow” </strong>. Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT, 
                        workshop IT, dan seminar nasional & talkshow dengan para ahli teknologi. 
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">
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

            {/* Section IT Seminar */}
            <section className="min-h-[90vh] flex items-center mt-24">
                <div className="max-w-7xl mx-auto px-8 flex items-center justify-between gap-10">
                    {/* TEXT */}
                    <div className="w-2/3">
                        <h2 className="text-5xl font-semibold text-[#76153C] mb-6">
                            IT Seminar
                        </h2>
                        <p className="text-gray-600 text-2xl leading-normal mb-6">
                            Seminar Nasional Teknologi Informasi ini mengangkat tema {" "}
                            <strong>
                                “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.”
                            </strong> Kami bertujuan untuk menggeser
                            fokus dari ketakutan akan kompitisi menjadi eksplorasi peluang kolaborasi. Seminar ini 
                            akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan 
                            kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan 
                            produktivitas manusia—bukan sebagai pengganti.
                        </p>

                        <div className="flex gap-3">
                            <Button 
                                title="DAFTAR IT SEMINAR" 
                                variant="primary"
                                onClick={() => navigate("/seminar")}
                                className="
                                    relative overflow-hidden
                                    before:absolute before:top-0 before:left-[-100%]
                                    before:w-full before:h-full
                                    before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
                                    before:transition-all before:duration-700
                                    hover:before:left-[100%]
                                "
                            />
                        </div>
                    </div>
                    {/* IMAGE */}
                    <div className="w-1/3 flex justify-center">
                        <img 
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
                            alt="Maskot-Seminar"
                            className="w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Section IT Talkshow */}
            <section className="bg-[#FFEDF3] min-h-[90vh] flex items-center mt-24">
                <div className="max-w-7xl mx-auto px-8 flex items-center justify-between gap-10">
                    {/* IMAGE */}
                    <div className="w-1/3 flex justify-center">
                        <img 
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
                            alt="Maskot-Talkshow"
                            className="w-full"
                        />
                    </div>
                    {/* TEXT */}
                    <div className="w-2/3">
                        <h2 className="text-5xl font-semibold text-[#76153C] mb-4">
                            IT Talkshow
                        </h2>
                        <p className="text-gray-600 text-xl leading-normal mb-4">
                            Talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia 
                            dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas 
                            teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk 
                            menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—
                            seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami 
                            akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, 
                            tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. 
                            Talkshow ini bertujuan untuk menginspirasi generasi muda dan para 
                            penggiat teknologi untuk tidak hanya menjadi pengguna, tetapi juga 
                            menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung 
                            untuk meningkatkan pengetahuan, mengembangkan potensi diri, dan 
                            menjadi bagian dari dialog penting dalam membentuk era kolaborasi 
                            manusia dan AI.
                        </p>

                        <div className="flex gap-3">
                            <Button 
                                title="DAFTAR IT TALKSHOW" 
                                variant="primary"
                                onClick={() => navigate("/talkshow")} 
                                className="
                                    relative overflow-hidden
                                    before:absolute before:top-0 before:left-[-100%]
                                    before:w-full before:h-full
                                    before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
                                    before:transition-all before:duration-700
                                    hover:before:left-[100%]
                                "
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section IT Workshop */}
            <section className="min-h-[90vh] flex items-center mt-24">
                <div className="max-w-7xl mx-auto px-8 flex items-center justify-between gap-10">
                    {/* TEXT */}
                    <div className="w-2/3">
                        <h2 className="text-5xl font-semibold text-[#76153C] mb-6">
                            IT Workshop
                        </h2>
                        <p className="text-gray-600 text-2xl leading-normal mb-6">
                            Workshop "AI for a Sustainable Future: The Role of Z Generation in the 
                            Digital Era” ini menjembatani antara potensi Generasi Z dan kekuatan AI 
                            untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali 
                            wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi 
                            lingkungan yang nyata dan terukur di era digital.
                        </p>

                        <div className="flex gap-3">
                            <Button 
                                title="DAFTAR IT WORKSHOP" 
                                variant="primary" 
                                onClick={() => navigate("/workshop")}
                                className="
                                    relative overflow-hidden
                                    before:absolute before:top-0 before:left-[-100%]
                                    before:w-full before:h-full
                                    before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
                                    before:transition-all before:duration-700
                                    hover:before:left-[100%]
                                "
                            />
                        </div>
                    </div>
                    {/* IMAGE */}
                    <div className="w-1/2 flex justify-center">
                        <img 
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
                            alt="Maskot-Workshop"
                            className="w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Section IT Competition */}
            <section className=" bg-[#FFEDF3] min-h-[90vh] flex items-center mt-24 mb-24">
                <div className="max-w-7xl mx-auto px-8 flex items-center justify-between gap-10">
                    {/* IMAGE */}
                    <div className="w-1/2 flex justify-center">
                        <img 
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
                            alt="Maskot-Competition"
                            className="w-full"
                        />
                    </div>
                    {/* TEXT */}
                    <div className="w-2/3">
                        <h2 className="text-5xl font-semibold text-[#76153C] mb-6">
                            IT Competition
                        </h2>
                        <p className="text-gray-600 text-2xl leading-normal mb-6">
                            {" "} <strong>"From Creation to Innovation" </strong>  adalah sebuah kompetisi IT yang 
                            dirancang untuk menjembatani jurang antara ide kreatif dan inovasi nyata. 
                            Ajang ini menantang para talenta digital untuk tidak hanya menciptakan 
                            sesuatu yang baru, tetapi juga mengembangkannya menjadi solusi yang 
                            berdampak, berkelanjutan, dan bernilai guna tinggi.
                        </p>

                        <div className="flex gap-3">
                            <Button 
                                title="DAFTAR IT COMPETITION" 
                                variant="primary"
                                onClick={() => navigate("/competition")} 
                                className="
                                    relative overflow-hidden
                                    before:absolute before:top-0 before:left-[-100%]
                                    before:w-full before:h-full
                                    before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
                                    before:transition-all before:duration-700
                                    hover:before:left-[100%]
                                "
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}