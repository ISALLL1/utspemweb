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
    const apiUrl = import.meta.env.VITE_API_URL;

    // FETCH EVENTS
    fetch(`${apiUrl}/api/events`)
      .then((res) => res.json())
      .then((data) => setEvents(Array.isArray(data) ? data : []))
      .catch((err) => console.log("Error events:", err));

    // FETCH CATEGORIES
    fetch(`${apiUrl}/api/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(Array.isArray(data) ? data : []))
      .catch((err) => console.log("Error categories:", err));

    // FETCH SPEAKERS
    fetch(`${apiUrl}/api/pembicara`)
      .then((res) => res.json())
      .then((data) => setSpeakers(Array.isArray(data) ? data : []))
      .catch((err) => console.log("Error speakers:", err));
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#76153C]">Dashboard</h1>
        <p className="text-gray-500">Ringkasan data event system</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-xl p-5 border-l-4 border-[#76153C]">
          <h2 className="text-lg font-semibold text-gray-700">Total Events</h2>
          <p className="text-3xl font-bold text-[#76153C]">{events.length}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5 border-l-4 border-[#76153C]">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Categories
          </h2>
          <p className="text-3xl font-bold text-[#76153C]">
            {categories.length}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-5 border-l-4 border-[#76153C]">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Speakers
          </h2>
          <p className="text-3xl font-bold text-[#76153C]">{speakers.length}</p>
        </div>
      </div>
    </div>
  );
}
