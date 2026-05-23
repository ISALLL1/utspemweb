import type React from "react";
import Button from "./Button";

interface HeroProps {
    titleImage?: string
    title?: string;
    slogan?: string;
    description: React.ReactNode;
    image: string;
    primaryBtn?: {
        title: string;
        onClick?: () => void;
    };
    secondaryBtn?: {
        title: string;
        onClick: () => void;
    };
}

const Hero: React.FC<HeroProps> = ({
    titleImage,
    title,
    slogan,
    description,
    image,
    primaryBtn,
    secondaryBtn,
}) => {
    return(
        <div className="min-h-[90vh] flex items-center">
            <div className="max-w-7xl mx-auto px-8 flex items-center justify-between gap-10">
                <div className="w-2/3">
                    {titleImage && (
                        <img src={titleImage} alt="title" className="w-70" />
                    )}

                    {title && (
                        <h2 className="text-5xl font-semibold text-[#76153C] mb-4">
                            {title}
                        </h2>
                    )}
                    <p className="text-3xl font-semibold text-[#76153C] mb-5">
                        {slogan}
                    </p>
                    <p className="text-gray-600 text-2xl leading-normal mb-6">
                        {description}
                    </p>

                    <div className="flex gap-3">
                        {primaryBtn && (
                            <Button 
                                title={primaryBtn.title} 
                                variant="primary"
                                onClick={primaryBtn.onClick}
                                className="
                                    relative overflow-hidden
                                    before:absolute before:top-0 before:left-[-100%]
                                    before:w-full before:h-full
                                    before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
                                    before:transition-all before:duration-700
                                    hover:before:left-[100%]
                                "
                            />
                        )}

                        {secondaryBtn && (
                            <Button
                                title={secondaryBtn.title}
                                variant="outline"
                                onClick={secondaryBtn.onClick}
                            />
                        )}
                    </div>
                </div>

                {/* IMAGE */}
                <div className="w-1/3 flex justify-center">
                    <img 
                        src={image} 
                        alt="imageHero" 
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero;