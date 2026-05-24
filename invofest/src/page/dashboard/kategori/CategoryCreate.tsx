import { useForm } from "react-hook-form";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

type FormData = { nama: string; description: string };

export default function CategoryCreate() {
  const [redirect, setRedirect] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(
      z.object({
        nama: z.string().min(1, "Nama kategori wajib diisi"),
        description: z.string().min(1, "Deskripsi wajib diisi"),
      }),
    ),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`${API_URL}/api/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setRedirect(true);
      } else {
        alert("Gagal menambahkan kategori");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan pada server");
    }
  };

  if (redirect) return <Navigate to="/dashboard/category" />;

  return (
    <div className="p-10 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#76153C]">
        Tambah Kategori
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Nama Kategori"
          name="nama"
          register={register}
          error={errors.nama?.message}
        />
        <Input
          label="Deskripsi"
          name="description"
          register={register}
          error={errors.description?.message}
        />
        <Button title="Simpan Kategori" variant="primary" />
      </form>
    </div>
  );
}
