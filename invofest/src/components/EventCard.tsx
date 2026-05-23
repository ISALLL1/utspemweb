import Button from "./Button";
import { useNavigate } from "react-router-dom";

interface EventCardProps {
    title: string;
    deskripsi: string;   
}

const EventCard: React.FC<EventCardProps> = ({
    title,
    deskripsi,
}) => {

    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border-r-8 border-[#76153C]">
            <h3 className="text-2xl font-bold text-[#76153C] mb-3">{title}</h3>
            <p className="text-gray-600 mb-4">{deskripsi}</p>
            <Button 
                title="INFO SELENGKAPNYA" 
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
    );
};

export default EventCard;