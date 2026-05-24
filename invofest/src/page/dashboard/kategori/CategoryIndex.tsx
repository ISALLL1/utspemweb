import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Category {
  id: number;
  nama: string;
  description: string;
}

export default function CategoryIndex() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(Array.isArray(data) ? data : []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Gagal mengambil data:", error);
        setIsLoading(false);
      });
  }, [API_URL]);

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus kategori ini?")) return;

    try {
      await fetch(`${API_URL}/api/categories/${id}`, {
        method: "DELETE",
      });
      setCategories((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus kategori!");
    }
  };

  if (isLoading) return <div className="p-6">Memuat data...</div>;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#76153C]">Kategori Event</h1>
          <p className="text-xl font-semibold text-gray-500">
            Daftar kategori yang tersedia
          </p>
        </div>
        <Link
          to="/dashboard/category/create"
          className="px-4 py-2 bg-[#76153C] text-white rounded-lg hover:bg-[#5a0f2d] transition"
        >
          + Tambah kategori
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl p-6 shadow-sm border-r-8 border-[#76153C]"
            >
              <h3 className="text-2xl font-bold text-[#76153C] mb-3">
                {category.nama}
              </h3>
              <p className="text-gray-600 mb-6">{category.description}</p>

              <div className="flex gap-3">
                <Link
                  to={`/dashboard/category/edit/${category.id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Tidak ada kategori yang tersedia.</p>
        )}
      </div>
    </div>
  );
}
