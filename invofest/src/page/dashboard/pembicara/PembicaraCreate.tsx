import { useForm } from "react-hook-form"
import { useState } from "react"
import { Navigate } from "react-router-dom"
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

})

export default function PembicaraCreate(){

    const {register, handleSubmit, formState:{errors} } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: FormData) => {
        try {
            await fetch(import.meta.env.VITE_API_URL + "/speakers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nama: data.nama,
                    materi: data.materi,
                    jabatan: data.jabatan,
                    foto: data.foto,
                }),
            });

            setRedirect(true);
        } catch (error) {
            console.log("Gagal menambahkan pembicara", error);
        }
    }

    const [redirect, setRedirect] = useState(false);

    if (redirect) {
        return <Navigate to="/dashboard/pembicara" />
    }

    return(
        <div className="min-h-screen flex items-center justify-center py-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center mb-1 text-[#76153C]">
                    Tambah Pembicara
                </h2>
                <p className="text-center mb-3 text-gray-500">
                    Isi Data Pembicara
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                    <Input 
                        label="Nama Pembicara"
                        name="nama"
                        register={register}
                        error={errors.nama?.message}
                        placeholder="Contoh: Marcello"
                    />

                    <Input 
                        label="Materi"
                        name="materi"
                        register={register}
                        error={errors.materi?.message}
                        placeholder="Contoh: Artificial Intelligence"
                    />

                    <Input 
                        label="Jabatan"
                        name="jabatan"
                        register={register}
                        error={errors.jabatan?.message}
                        placeholder="Contoh: Software Engineer"
                    />

                    <Input 
                        label="Link Foto"
                        name="foto"
                        register={register}
                        error={errors.foto?.message}
                        placeholder=""
                    />

                    <Button title="Tambah Pembicara" variant="primary" className="hover:bg-[#3A0519]" />
                </form>
            </div>
        </div>
    )
}