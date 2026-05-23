interface ScheduleWorkshopProps {
    topic: string;
    date: string;
    time: string;
    location: string;
    svgIcon: React.ReactNode;
}

export const ScheduleWorkshop = ({ topic, date, time, location, svgIcon }: ScheduleWorkshopProps) => {
    return (
        <div className="p-8 bg-white border-b-4 sm:border-b-0 box-content sm:box-border sm:border-r-4 w-full max-w-lg border-[#76153C] rounded-xl flex flex-col sm:flex-row gap-5 mx-5">
            <div className="w-full sm:w-auto py-5 sm:py-5 sm:px-10 bg-[#76153C] rounded-2xl text-8xl flex items-center justify-center">
                {svgIcon}
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-slate-700">{topic}</h2>
                <div className="flex items-center gap-5 text-lg">
                    <svg stroke="curretColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="inline text-xl text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg>
                    <p className="text-slate-500">{date}</p>
                </div>
                <div className="flex items-center gap-5 text-lg">
                    <svg stroke="curretColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="inline text-xl text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0-81.3 81.2-81.2 212.9 0 294.2 81.2 81.2 212.9 81.2 294.2 0 81.2-81.2 81.2-213 0-294.2zm-16.5 53.2c7.6-4.4 17.5-1.8 21.9 5.9 4.4 7.6 1.8 17.5-5.9 21.9-7.6 4.4-17.5 1.8-21.9-5.9-4.4-7.6-1.8-17.5 5.9-21.9zM80 256c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm45.4 93.9c-7.6 4.4-17.5 1.8-21.9-5.9-4.4-7.6-1.8-17.5 5.9-21.9 7.6-4.4 17.5-1.8 21.9 5.9 4.4 7.6 1.8 17.5-5.9 21.9zm5.9-165.9c-4.4 7.6-14.2 10.3-21.9 5.9-7.6-4.4-10.3-14.2-5.9-21.9 4.4-7.6 14.2-10.3 21.9-5.9 7.7 4.4 10.3 14.3 5.9 21.9zm36.7-80.4c7.6-4.4 17.5-1.8 21.9 5.9 4.4 7.6 1.8 17.5-5.9 21.9s-17.5 1.8-21.9-5.9c-4.4-7.7-1.7-17.5 5.9-21.9zm-7.8 110.7l15.6-26.6 95.2 56.9V384h-31V260.6l-79.8-46.3zm29.7 188.3c-4.4 7.6-14.2 10.3-21.9 5.9s-10.3-14.2-5.9-21.9c4.4-7.6 14.2-10.3 21.9-5.9 7.6 4.4 10.3 14.2 5.9 21.9zM256 432c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm0-320c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm88 296.4c-7.6 4.4-17.5 1.8-21.9-5.9-4.4-7.6-1.8-17.5 5.9-21.9 7.6-4.4 17.5-1.8 21.9 5.9 4.4 7.7 1.7 17.5-5.9 21.9zm5.9-283c-4.4 7.6-14.2 10.3-21.9 5.9s-10.3-14.2-5.9-21.9c4.4-7.6 14.2-10.3 21.9-5.9s10.3 14.3 5.9 21.9zM408.4 344c-4.4 7.6-14.2 10.3-21.9 5.9-7.6-4.4-10.3-14.2-5.9-21.9 4.4-7.6 14.2-10.3 21.9-5.9 7.7 4.4 10.3 14.3 5.9 21.9zm7.6-72c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"></path></svg>
                    <p className="text-slate-500">{time}</p>
                </div>
                <div className="flex items-center gap-5 text-lg">
                    <svg stroke="curretColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="inline text-xl text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>
                    <p className="text-slate-500">{location}</p>
                </div>
            </div>
        </div>
    );
}

export default ScheduleWorkshop;