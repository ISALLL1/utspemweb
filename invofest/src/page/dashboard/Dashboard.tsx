import { useEffect, useState } from "react";

interface Event {
    id: number;
    nama: string;
}

interface Category {
    id: number;
    nama: string;
}

interface Speaker {
    id: number;
    nama: string;
}

export default function Dashboard() {
    const [events, setEvents] = useState<Event[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [speakers, setSpeakers] = useState<Speaker[]>([]);

    useEffect(() => {
        // FETCH EVENTS
        fetch(import.meta.env.VITE_API_URL + "/events")
            .then((res) => res.json())
            .then((data) => setEvents(data))
            .catch((err) => console.log("Error events:", err));

        // FETCH CATEGORIES
        fetch(import.meta.env.VITE_API_URL + "/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.log("Error categories:", err));

        // FETCH SPEAKERS
        fetch(import.meta.env.VITE_API_URL + "/speakers")
            .then((res) => res.json())
            .then((data) => setSpeakers(data))
            .catch((err) => console.log("Error speakers:", err));
    }, []);

    return (
        <div className="p-6 space-y-6">

            {/* HEADER */}
            <div>
                <h1 className="text-3xl font-bold text-[#76153C]">
                    Dashboard
                </h1>
                <p className="text-gray-500">
                    Ringkasan data event system
                </p>
            </div>

            {/* STATS CARD */}
            <div className="grid grid-cols-3 gap-4">

                <div className="bg-white shadow rounded-xl p-5">
                    <h2 className="text-lg font-semibold">Total Events</h2>
                    <p className="text-2xl font-bold text-[#76153C]">
                        {events.length}
                    </p>
                </div>

                <div className="bg-white shadow rounded-xl p-5">
                    <h2 className="text-lg font-semibold">Total Categories</h2>
                    <p className="text-2xl font-bold text-[#76153C]">
                        {categories.length}
                    </p>
                </div>

                <div className="bg-white shadow rounded-xl p-5">
                    <h2 className="text-lg font-semibold">Total Speakers</h2>
                    <p className="text-2xl font-bold text-[#76153C]">
                        {speakers.length}
                    </p>
                </div>
            </div>
        </div>
    );
}