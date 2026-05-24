import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Select } from "../../../components/Select";

export default function EventEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cats, setCats] = useState([]);
  const [speaks, setSpeaks] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    // Fetch data untuk dropdown dan data event yang akan diedit
    fetch(`${API_URL}/api/categories`)
      .then((r) => r.json())
      .then(setCats);
    fetch(`${API_URL}/api/pembicara`)
      .then((r) => r.json())
      .then(setSpeaks);
    fetch(`${API_URL}/api/events/${id}`)
      .then((r) => r.json())
      .then((d) => {
        reset({
          ...d,
          dateEvent: d.dateEvent ? d.dateEvent.split("T")[0] : "",
          categoryId: String(d.categoryId),
          speakerId: String(d.speakerId),
        });
      });
  }, [id, reset, API_URL]);

  const onSubmit = async (data: any) => {
    try {
      await fetch(`${API_URL}/api/events/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          dateEvent: new Date(data.dateEvent),
          categoryId: Number(data.categoryId),
          speakerId: Number(data.speakerId),
        }),
      });
      navigate("/dashboard/event");
    } catch (error) {
      console.error("Gagal update:", error);
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6 text-[#76153C]">Edit Event</h2>
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
          options={cats.map((c: any) => ({
            label: c.nama,
            value: String(c.id),
          }))}
        />

        <Select
          label="Speaker"
          name="speakerId"
          register={register}
          options={speaks.map((s: any) => ({
            label: s.nama,
            value: String(s.id),
          }))}
        />

        <Button title="Update Event" variant="primary" />
      </form>
    </div>
  );
}
