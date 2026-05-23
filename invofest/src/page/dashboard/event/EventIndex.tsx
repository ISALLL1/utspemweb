import { Calendar, MapPin, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Interface sudah benar, tidak perlu diubah
interface Event {
  id: number;
  nama: string;
  location: string;
  dateEvent: string;
  description: string;
  category?: { nama: string };
  speaker?: { nama: string };
}

export default function EventIndex() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/events")
      .then((res) => res.json())
      .then((data) => {
        // Pastikan data adalah array sebelum diset ke state
        setEvents(Array.isArray(data) ? data : []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Gagal ambil data event", err);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Yakin ingin menghapus event?");
    if (!confirmDelete) return;

    try {
      await fetch(import.meta.env.VITE_API_URL + `/events/${id}`, {
        method: "DELETE",
      });
      setEvents((prev) => prev.filter((e) => e.id !== id));
      alert("Event berhasil dihapus");
    } catch (error) {
      console.log(error);
      alert("Gagal menghapus event");
    }
  };

  if (isLoading) return <div className="p-6">Memuat data...</div>;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#76153C]">Event Invofest</h1>
          <p className="text-xl font-semibold text-[#76153C]">
            Daftar event yang tersedia
          </p>
        </div>
        <Link
          to="/dashboard/event/create"
          className="px-4 py-2 bg-[#76153C] text-white rounded-lg hover:bg-[#5a0f2d] transition"
        >
          Tambah Event
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* JARING PENGAMAN: Cek apakah events ada isi */}
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl p-6 shadow-[0_10px_25px_rgba(118,21,60,0.15)] border-r-[6px] border-[#76153C]"
            >
              <p className="text-sm text-[#76153C] font-semibold mb-1">
                {event.category?.nama || "Tanpa Kategori"}
              </p>
              <h3 className="text-2xl font-bold text-[#76153C] mb-4">
                {event.nama}
              </h3>
              <div className="flex flex-col gap-3 text-gray-600">
                <p className="flex items-center gap-2">
                  {event.description?.length > 100
                    ? event.description.slice(0, 100) + "..."
                    : event.description}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={18} /> {event.location}
                </p>
                <p className="flex items-center gap-2">
                  <Calendar size={18} />{" "}
                  {new Date(event.dateEvent).toLocaleDateString()}
                </p>
                <p className="flex items-center gap-2">
                  <User size={18} />{" "}
                  {event.speaker?.nama || "Belum ada speaker"}
                </p>
              </div>
              <Link
                to={`/dashboard/event/edit/${event.id}`}
                className="mt-4 inline-block px-4 py-2 bg-[#76153C] text-white rounded hover:bg-red-700 transition"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(event.id)}
                className="mt-3 ml-2 px-4 py-2 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            Tidak ada event yang dapat ditampilkan.
          </p>
        )}
      </div>
    </div>
  );
}
