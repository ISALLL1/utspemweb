import Button from "./Button";

interface CompetitionCardProps {
    title: string;
    description: string;
    image: string;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({
    title,
    description,
    image,
}) => {
    return(
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition-all duration-300 group">
            <div className="w-full aspect-4/3 overflow-hidden relative">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full transition duration-300 group-hover:grayscale-40"
                />
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-700 mb-3">
                    {title}
                </h3>
                <p className="text-gray-600 mb-5">
                    {description}
                </p>
                <Button 
                    title="INFO SELENGKAPNYA" 
                    variant="primary" 
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
    );
}

export default CompetitionCard;