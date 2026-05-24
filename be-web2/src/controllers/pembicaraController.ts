import { Request, Response } from "express";
import prisma from "../lib/db.js";

// Menampilkan semua pembicara
export const getAllSpeakers = async (req: Request, res: Response) => {
  try {
    const speakers = await prisma.pembicara.findMany();
    res.json(speakers);
  } catch (error) {
    console.error("Error fetching speakers:", error);
    res.status(500).json([]);
  }
};

// Membuat data pembicara
export const createSpeaker = async (req: Request, res: Response) => {
  try {
    const { nama, materi, jabatan, foto } = req.body;

    if (!nama || !jabatan || !foto) {
      return res
        .status(400)
        .json({ message: "Nama, jabatan, dan foto harus diisi!" });
    }

    const newSpeaker = await prisma.pembicara.create({
      data: { nama, materi, jabatan, foto },
    });

    res.status(201).json(newSpeaker);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Gagal membuat pembicara", error: String(error) });
  }
};

// Menampilkan speaker berdasarkan ID
export const getSpeakerById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) return res.status(400).json({ message: "ID tidak valid" });

    const speaker = await prisma.pembicara.findUnique({
      where: { id },
    });

    if (!speaker) {
      return res.status(404).json({ message: "Pembicara tidak ditemukan" });
    }
    res.json(speaker);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan server", error: String(error) });
  }
};

// Mengupdate data speaker berdasarkan ID
export const updateSpeakerById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "ID tidak valid" });

    const { nama, materi, jabatan, foto } = req.body;

    const updatedSpeaker = await prisma.pembicara.update({
      where: { id },
      data: { nama, materi, jabatan, foto },
    });
    res.json(updatedSpeaker);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Gagal update Pembicara", error: String(error) });
  }
};

// Menghapus data pembicara berdasarkan ID
export const deleteSpeakerById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "ID tidak valid" });

    await prisma.pembicara.delete({
      where: { id },
    });

    res.json({ message: "Pembicara berhasil dihapus" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Gagal menghapus pembicara", error: String(error) });
  }
};
