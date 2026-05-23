import React from "react";

interface JadwalEventItems{
    value: string;
    icon: React.ReactNode;
}

interface JadwalEventProps {
    items: JadwalEventItems[];
}

const JadwalEvent: React.FC<JadwalEventProps> = ({ items }) => {
    return (
        <div className="bg-[#FFEDF3] py-20 font-sans">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-5xl md:text-5xl font-semibold text-[#802C44] text-center mb-16">
                    Pelaksanaan Event
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {items.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl p-6 flex flex-col gap-4
                            shadow-[0_10px_25px_rgba(190,24,93,0.15)]
                            border-r-[6px] border-[#802C44]
                            transition-all duration-300"
                        >
                            <div className="flex items-center gap-6">
                                <div className="shrink-0 w-16 h-16 bg-[#802C44] rounded-xl flex items-center justify-center text-white">
                                    {React.isValidElement(item.icon)
                                        ? React.cloneElement(item.icon as React.ReactElement<any>, {
                                            size: 30,
                                            strokeWidth: 1.5,
                                        })
                                        : item.icon}
                                </div>
                                <p className="text-gray-600 text-2xl">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default JadwalEvent;