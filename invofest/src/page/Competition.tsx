import CompetitionCard from "../components/CompetitionCard";
import Hero from "../components/Heroo";
import { useNavigate } from "react-router-dom";

export default function Competition(){
    const navigate = useNavigate();

    return( 
        <div>
            <Hero
                title="IT Competition"
                slogan={`"From Creation to Innovation"`}
                description={
                    <>
                        Kompetisi dalam INVOFEST ini mengusung tema" <strong> “From Creation to Innovation” </strong>, 
                        Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan 
                        kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang 
                        mampu mewujudkan masa depan yang berkelanjutan.
                    </>
                }
                image="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
                primaryBtn={{ 
                    title: "INFO SELENGKAPNYA", 
                    onClick: () => navigate("/competition")
                }}
                secondaryBtn={{ 
                    title:"HUBINGI PANITIA", 
                    onClick: () => navigate("/competition")
                }}

            />
            
            <div className="bg-[#FFEDF3] text-center px-8 py-10 mt-16">
                <h2 className="text-5xl font-semibold text-[#76153C] mb-6">
                    DESKRIPSI KOMPETISI
                </h2>
                <p className="text-gray-600 text-2xl leading-normal mx-auto mb-10">
                    Kompetisi atau perlombaan yang ada dalam kegiatan <strong> INVOFEST (Infomatics Vocational Festival) 2025 </strong> adalah diantaranya 
                    National Poster Design Competition, UI UX Design Competition, dan juga UI/UX Design Competition. Kompetisi dalam 
                    INVOFEST ini mengusung tema <strong> “From Creation to Innovation” </strong> Tema ini bertujuan mengajak generasi muda untuk 
                    mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu 
                    mewujudkan masa depan yang berkelanjutan. Melalui pendekatan ini, diharapkan generasi ini akan berperan dalam 
                    menciptakan solusi-solusi baru untuk tantangan masa kini dan mendatang, baik dalam hal teknologi, lingkungan, pendidikan, 
                    maupun tanggung jawab sosial.
                </p>
            </div>


            <div className="bg-white py-16 mt-24">
                <h2 className="text-5xl font-semibold text-[#76153C] mb-6 text-center">
                    DAFTAR KOMPETISI
                </h2>
                <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-normal text-center mb-8">
                    Berikut Adalah Daftar Kompetisi Yang Ada Pada Event INVOFEST.
                </p>
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-3 gap-8">

                        <CompetitionCard 
                            title="Poster Design Competition"
                            description="Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini."
                            image="https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png"
                        />

                        <CompetitionCard 
                            title="UI/UX Design Competition"
                            description="UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna."
                            image="https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png"
                        />

                        <CompetitionCard 
                            title="Web Design Competition"
                            description="Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi."
                            image="https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}