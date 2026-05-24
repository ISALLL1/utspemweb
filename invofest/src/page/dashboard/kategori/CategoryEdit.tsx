import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

export default function CategoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    // Mengambil data kategori untuk di-reset ke dalam form
    fetch(`${API_URL}/api/categories/${id}`)
      .then((r) => r.json())
      .then((data) => reset(data))
      .catch((err) => console.error("Gagal memuat data kategori", err));
  }, [id, reset, API_URL]);

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`${API_URL}/api/categories/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate("/dashboard/category");
      } else {
        alert("Gagal mengupdate kategori");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan koneksi");
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6 text-[#76153C]">Edit Kategori</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <Input label="Nama Kategori" name="nama" register={register} />
        <Input label="Deskripsi" name="description" register={register} />
        <Button title="Update Kategori" variant="primary" />
      </form>
    </div>
  );
}
