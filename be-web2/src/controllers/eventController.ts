import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// menampilkan semua event
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    //ambil data dari database
    const events = await prisma.event.findMany({
      include: {
        category: true,
        speaker: true,
      },
    });

    //tampilkan semua data
    res.json(events);
  } catch (error) {
    //jika gagal
    res.status(500).json({
      message: "Gagal mengambil data event",
      error,
    });
  }
};

// menampilkan data event terbaru
export const createEvent = async (req: Request, res: Response) => {
  try {
    const { nama, location, dateEvent, description, categoryId, speakerId } =
      req.body;

    if (
      !nama ||
      !location ||
      !dateEvent ||
      !description ||
      !categoryId ||
      !speakerId
    ) {
      return res
        .status(400)
        .json({ message: "Data event harus di isi lengkap!" });
    }

    const newEvent = await prisma.event.create({
      data: {
        nama,
        location,
        dateEvent: new Date(dateEvent),
        description,
        categoryId: Number(categoryId),
        speakerId: Number(speakerId),
      },
    });

    res.status(201).json(newEvent);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat membuat event", error });
  }
};

//menampilkan data event berdasarkan id
export const getEventById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        category: true,
        speaker: true,
      },
    });

    if (!event) {
      return res.status(404).json({
        message: "Event tidak ditemukan",
      });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error,
    });
  }
};

//mengupdate data event berdasarkan id
export const updateEventById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { nama, location, dateEvent, description, categoryId, speakerId } =
      req.body;

    const updateEventById = await prisma.event.update({
      where: { id },
      data: {
        nama,
        location,
        dateEvent: new Date(dateEvent),
        description,
        categoryId: Number(categoryId),
        speakerId: Number(speakerId),
      },
    });
    res.json(updateEventById);
  } catch (error) {
    res.status(500).json({ message: "Gagal update event!", error });
  }
};

//menghapus data event berdasarkan id
export const deleteEventById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await prisma.event.delete({
      where: { id },
    });
    res.json({ message: "Events berhasil dihapus!" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus event!", error });
  }
};
