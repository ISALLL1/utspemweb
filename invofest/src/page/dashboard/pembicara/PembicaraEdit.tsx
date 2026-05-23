 import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
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

export default function PembicaraEdit(){
    const { id } = useParams();
    const [redirect, setRedirect] = useState(false);

    const {register, handleSubmit, reset, formState:{errors} } = useForm<FormData>({ resolver: zodResolver(schema) });

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + `/speakers/${id}`)
            .then((res) => res.json())
            .then((data) => {
                reset({
                    nama: data.nama,
                    materi: data.materi || "",
                    jabatan: data.jabatan,
                    foto: data.foto,
                });
            })
            .catch((err) => console.log(err));
    }, [id, reset]);

    const onSubmit = async (data: FormData) => {
        try {
            await fetch(import.meta.env.VITE_API_URL + `/speakers/${id}`, {
                method: "PUT",
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


    if (redirect) {
        return <Navigate to="/dashboard/pembicara" />
    }

    return(
        <div className="min-h-screen flex items-center justify-center py-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center mb-1 text-[#76153C]">
                    Edit Pembicara
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

                    <Button title="Update Pembicara" variant="primary" className="hover:bg-[#3A0519]" />
                </form>
            </div>
        </div>
    )
}