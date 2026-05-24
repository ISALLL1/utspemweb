import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Select } from "../../../components/Select";

export default function EventCreate() {
  const [categories, setCategories] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch(`${API_URL}/api/categories`)
      .then((r) => r.json())
      .then(setCategories)
      .catch((err) => console.error("Gagal ambil kategori", err));

    fetch(`${API_URL}/api/pembicara`)
      .then((r) => r.json())
      .then(setSpeakers)
      .catch((err) => console.error("Gagal ambil pembicara", err));
  }, [API_URL]);

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`${API_URL}/api/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama: data.nama,
          location: data.location,
          dateEvent: data.dateEvent,
          description: data.description,
          categoryId: Number(data.categoryId),
          pembicaraId: Number(data.speakerId),
        }),
      });

      if (response.ok) {
        alert("Event berhasil disimpan!");
        setRedirect(true);
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan koneksi");
    }
  };

  if (redirect) return <Navigate to="/dashboard/event" />;

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6 text-[#76153C]">
        Tambah Event Baru
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-lg"
      >
        <Input label="Nama Event" name="nama" register={register} />
        <Input
          label="Tanggal"
          name="dateEvent"
          type="date"
          register={register}
        />
        <Input label="Lokasi" name="location" register={register} />
        <Input label="Deskripsi" name="description" register={register} />

        <Select
          label="Kategori"
          name="categoryId"
          register={register}
          options={categories.map((c: any) => ({
            label: c.nama,
            value: String(c.id),
          }))}
        />

        <Select
          label="Speaker"
          name="speakerId"
          register={register}
          options={speakers.map((s: any) => ({
            label: s.nama,
            value: String(s.id),
          }))}
        />

        <Button title="Simpan Event" variant="primary" />
      </form>
    </div>
  );
}
