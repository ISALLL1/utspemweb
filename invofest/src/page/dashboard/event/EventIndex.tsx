import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EventIndex() {
  const [events, setEvents] = useState<any[]>([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/events`)
      .then((r) => r.json())
      .then((data) => setEvents(Array.isArray(data) ? data : []));
  }, [API_URL]);

  const handleDelete = async (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus event ini?")) {
      try {
        await fetch(`${API_URL}/api/events/${id}`, { method: "DELETE" });
        setEvents(events.filter((e) => e.id !== id));
      } catch (error) {
        console.error("Gagal menghapus event:", error);
      }
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#76153C]">Daftar Event</h1>
        <Link
          to="/dashboard/event/create"
          className="bg-[#76153C] text-white px-4 py-2 rounded-lg"
        >
          + Tambah Event
        </Link>
      </div>

      <div className="grid gap-4">
        {events.map((e) => (
          <div
            key={e.id}
            className="border p-4 rounded-lg shadow-sm flex justify-between items-center bg-white"
          >
            <div>
              <h3 className="font-bold text-lg">{e.nama}</h3>
              <p className="text-sm text-gray-600">
                {e.dateEvent
                  ? new Date(e.dateEvent).toLocaleDateString()
                  : "Tanggal tidak tersedia"}
              </p>
              <p className="text-gray-700 mt-1">{e.description}</p>
            </div>

            <div className="flex gap-2">
              <Link
                to={`/dashboard/event/edit/${e.id}`}
                className="text-blue-600 hover:underline px-3 py-1"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(e.id)}
                className="text-red-600 hover:underline px-3 py-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
