import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

//definisikan field yang akan diisi
type FormData = {
    kategori: string;
    description: string;
}

//deifnisikan validasi
const schema = z.object({
    kategori: z.string().min(1, "Kategori tidak boleh kosong!"),
    description: z.string().min(1, "Deskripsi tidak boleh kosong!"),
})


export default function CategoryEdit(){
    const { id } = useParams();
    const navigate = useNavigate();

    //regist fungsi zod
    const {register, handleSubmit, reset,  formState:{errors} } = useForm<FormData>({ resolver: zodResolver(schema) });

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + `/categories/${id}`)
        .then((res) => res.json())
        .then((data) => {
            reset({
            kategori: data.nama,
            description: data.description,
            });
        })
        .catch((err) => console.log(err));
    }, [id, reset]);

    const onSubmit = async (data:FormData) => {
        try {
            await fetch(import.meta.env.VITE_API_URL + `/categories/${id}`, {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                nama: data.kategori,
                description: data.description,
                }),
            });

            navigate("/dashboard/category");
        } catch (error) {
            console.log("Gagal update category", error);
        }
    };

    return(
        <div className="min-h-screen flex items-center justify-center py-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center mb-1 text-[#76153C]">
                    Edit Kategori Event
                </h2>
                <p className="text-center mb-3 text-gray-500">
                    Silahkan Isi Detail Kategori
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <Input 
                        label="Kategori Event" 
                        name="kategori" 
                        register={register} 
                        error={errors.kategori?.message}
                        placeholder="Contoh: IT Seminar"
                    />
        
                    <Input 
                        label="Description Event" 
                        name="description" 
                        register={register} 
                        error={errors.description?.message}
                        placeholder="Event ini ..."
                    />
                        
                    <Button title="Update Kategori" variant="primary" className="hover:bg-[#3A0519]" />
        
                </form>
            </div>
        </div>
    )
}