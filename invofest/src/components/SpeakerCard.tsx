interface SpeakerCardProps {
    foto: string;
    nama: string;
    materi: string;
    jabatan: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
    foto,
    nama,
    materi,
    jabatan,
}) => {
    return (
        <div className="flex flex-col items-center group w-full max-w-112.5 mx-auto pt-4 transition-all">
            <div className="relative h-1/3 z-1">
                <div className="mx-auto w-fit transition-all duration-300 group-hover:scale-110">
                    <img 
                        src={foto} 
                        alt={nama} 
                        className="
                            h-48 w-48 md:h-60 md:w-60 rounded-full border-10 border-[#561530] object-cover"
                    />
                </div>
            </div>

            <div className="bg-white h-2/3 border-4 border-[#76153C] w-full pt-24 rounded-lg shadow-[0_8px_12px_rgba(86,21,48,0.7)] hover:bg-[#FFEDF3] transition-all duration-300">
        
                <div className="flex flex-col items-center gap-2">
                    <h3 className="text-2xl text-[#76153C] font-bold">{nama}</h3>
                    <p className="text-lg text-gray-600 text-center">{materi}</p>
                    <p className="text-lg text-gray-600 text-center">{jabatan}</p>
                </div>
            </div>
        </div>
    );
};

export default SpeakerCard