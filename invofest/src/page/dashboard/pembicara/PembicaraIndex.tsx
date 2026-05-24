import { useEffect, useState } from "react";
import SpeakerCard from "../../../components/SpeakerCard";
import { Link } from "react-router-dom";

export default function PembicaraIndex() {
  const [speakers, setSpeakers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/pembicara`)
      .then((res) => res.json())
      .then((data) => {
        setSpeakers(Array.isArray(data) ? data : []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat pembicara:", err);
        setIsLoading(false);
      });
  }, [API_URL]);

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus pembicara ini?")) return;
    try {
      await fetch(`${API_URL}/api/pembicara/${id}`, { method: "DELETE" });
      setSpeakers((prev) => prev.filter((s) => s.id !== id));
    } catch (error) {
      console.error("Gagal menghapus:", error);
      alert("Terjadi kesalahan saat menghapus");
    }
  };

  if (isLoading) return <div className="p-6">Memuat data pembicara...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#76153C]">Daftar Pembicara</h1>
        <Link
          to="/dashboard/pembicara/create"
          className="px-4 py-2 bg-[#76153C] text-white rounded-lg hover:bg-[#5a0f2d] transition"
        >
          + Tambah Pembicara
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {speakers.length > 0 ? (
          speakers.map((s) => (
            <div
              key={s.id}
              className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100"
            >
              <SpeakerCard
                foto={s.foto}
                nama={s.nama}
                materi={s.materi}
                jabatan={s.jabatan}
              />
              <div className="flex gap-2 mt-4 w-full justify-center">
                <Link
                  to={`/dashboard/pembicara/edit/${s.id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(s.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Belum ada data pembicara.
          </p>
        )}
      </div>
    </div>
  );
}
