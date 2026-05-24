import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

type FormData = {
  nama: string;
  materi?: string;
  jabatan: string;
  foto: string;
};

const schema = z.object({
  nama: z.string().min(1, "Nama wajib diisi!"),
  materi: z.string().optional(),
  jabatan: z.string().min(1, "Jabatan wajib diisi!"),
  foto: z.string().min(1, "Link foto wajib diisi!"),
});

export default function PembicaraEdit() {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    // Memperbaiki endpoint ke /api/pembicara
    fetch(`${API_URL}/api/pembicara/${id}`)
      .then((res) => res.json())
      .then((data) => {
        reset({
          nama: data.nama,
          materi: data.materi || "",
          jabatan: data.jabatan,
          foto: data.foto,
        });
      })
      .catch((err) => console.log("Gagal memuat data:", err));
  }, [id, reset, API_URL]);

  const onSubmit = async (data: FormData) => {
    try {
      // Memperbaiki endpoint ke /api/pembicara
      await fetch(`${API_URL}/api/pembicara/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setRedirect(true);
    } catch (error) {
      console.log("Gagal mengupdate pembicara", error);
      alert("Terjadi kesalahan saat mengupdate data.");
    }
  };

  if (redirect) {
    return <Navigate to="/dashboard/pembicara" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-1 text-[#76153C]">
          Edit Pembicara
        </h2>
        <p className="text-center mb-6 text-gray-500">Ubah Data Pembicara</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            label="Nama Pembicara"
            name="nama"
            register={register}
            error={errors.nama?.message}
          />
          <Input
            label="Materi"
            name="materi"
            register={register}
            error={errors.materi?.message}
          />
          <Input
            label="Jabatan"
            name="jabatan"
            register={register}
            error={errors.jabatan?.message}
          />
          <Input
            label="Link Foto"
            name="foto"
            register={register}
            error={errors.foto?.message}
          />
          <Button title="Update Pembicara" variant="primary" />
        </form>
      </div>
    </div>
  );
}
