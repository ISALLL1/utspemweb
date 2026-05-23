import { useForm } from "react-hook-form";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

//definisikan field yang akan diisi
type FormData = {
    nama: string;
    description: string;
}

//deifnisikan validasi
const schema = z.object({
    nama: z.string().min(1, "Kategori tidak boleh kosong!"),
    description: z.string().min(1, "Deskripsi tidak boleh kosong!"),
})


export default function CategoryCreate(){

    //regist fungsi zod
    const {register, handleSubmit, formState:{errors} } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = async (data:FormData) => {
        try {
            await fetch(import.meta.env.VITE_API_URL + "/categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nama: data.nama,
                    description: data.description,
                })
            });
            setRedirect(true);
        } catch (error) {
            console.log("Gagal menambahkan event", error)
        }
    }

    const [redirect, setRedirect] = useState(false);

    if (redirect) {
        return <Navigate to="/dashboard/category" />
    }

    return(
        <div className="min-h-screen flex items-center justify-center py-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center mb-1 text-[#76153C]">
                    Tambah Kategori Event
                </h2>
                <p className="text-center mb-3 text-gray-500">
                    Silahkan Isi Detail Kategori
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <Input 
                        label="Kategori Event" 
                        name="nama" 
                        register={register} 
                        error={errors.nama?.message}
                        placeholder="Contoh: IT Seminar"
                    />
        
                    <Input 
                        label="Description Event" 
                        name="description" 
                        register={register} 
                        error={errors.description?.message}
                        placeholder="Event ini ..."
                    />
                        
                    <Button title="Tambah Kategori" variant="primary" className="hover:bg-[#3A0519]" />
                </form>
            </div>
        </div>
    )
}