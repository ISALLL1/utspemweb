import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Select } from "../../../components/Select";

type FormData = {
    nama: string;
    location: string;
    dateEvent: string;
    description: string;
    categoryId: string;
    speakerId: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama event wajib diisi!"),
    location: z.string().min(1, "Lokasi event wajib diisi!"),
    dateEvent: z.string().min(1, "Tanggal wajib diisi!"),
    description: z.string().min(1, "Deskripsi wajib diisi!"),
    categoryId: z.string().min(1, "Pilih kategori event!"),
    speakerId: z.string().min(1, "Pilih speaker!"),
})

export default function EventEdit(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [speakers, setSpeakers] = useState([]);

    const { register, handleSubmit, reset, formState: {errors} } =
        useForm<FormData>({
            resolver: zodResolver(schema),
        });

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + "/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data));

        fetch(import.meta.env.VITE_API_URL + "/speakers")
            .then((res) => res.json())
            .then((data) => setSpeakers(data));
    }, []);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + `/events/${id}`)
            .then((res) => res.json())
            .then((data) => {
              reset({
                nama: data.nama,
                location: data.location,
                dateEvent: data.dateEvent?.split("T")[0], // format date input
                description: data.description,
                categoryId: String(data.categoryId),
                speakerId: String(data.speakerId),
              });
            })
        .catch((err) => console.log(err));
    }, [id, reset]);

    const onSubmit = async (data: FormData) => {
        try {
            await fetch(import.meta.env.VITE_API_URL + `/events/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nama: data.nama,
                    location: data.location,
                    dateEvent: data.dateEvent,
                    description: data.description,
                    categoryId: Number(data.categoryId),
                    speakerId: Number(data.speakerId),
                })
            });
            navigate("/dashboard/event");
        } catch (error) {
            console.log("Gagal menambahkan event", error)
        }
    };

    return(
        <div className="min-h-screen flex items-center justify-center py-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center mb-1 text-[#76153C]">
                    Edit Event
                </h2>
                <p className="text-center mb-3 text-gray-500">
                    Silahkan Isi detail event
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <Input
                        label="Nama Event"
                        name="nama"
                        register={register}
                        error={errors.nama?.message}
                        placeholder="Contoh: Human-AI Integration..."
                    />

                    <Input
                        label="Tanggal Event"
                        name="dateEvent"
                        type="date"
                        register={register}
                        error={errors.dateEvent?.message}
                        placeholder=""
                    />

                    <Input
                        label="Lokasi Event"
                        name="location"
                        register={register}
                        error={errors.location?.message}
                        placeholder="Contoh: Aula Gedung C"
                    />

                    <Input
                        label="Deskripsi"
                        name="description"
                        register={register}
                        error={errors.description?.message}
                        placeholder="Contoh: Universitas Harkat Negeri"
                    />

                    <Select
                        label="Kategori"
                        name="categoryId"
                        register={register}
                        options={categories.map((c: any) => ({
                            label: c.nama,
                            value: String(c.id)
                        }))}
                        error={errors.categoryId?.message}
                    />

                    <Select
                        label="Speaker"
                        name="speakerId"
                        register={register}
                        options= {speakers.map((s: any) => ({
                            label: s.nama,
                            value: String(s.id)
                        }))}
                        error={errors.speakerId?.message}
                    />

                    <Button 
                        title="Edit event"
                        variant="primary"
                        className="hover:bg-[#3A0519]"
                    />
                </form>
            </div>
        </div>
    )
}