import { Request, Response } from "express";
import prisma from "../lib/db.js";

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany({
      include: {
        category: true,
        pembicara: true,
      },
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data event",
      error,
    });
  }
};

export const createEvent = async (req: Request, res: Response) => {
  try {
    const { nama, location, dateEvent, description, categoryId, pembicaraId } =
      req.body;

    if (
      !nama ||
      !location ||
      !dateEvent ||
      !description ||
      !categoryId ||
      !pembicaraId
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
        pembicaraId: Number(pembicaraId),
      },
    });

    res.status(201).json(newEvent);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat membuat event", error });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        category: true,
        pembicara: true,
      },
    });

    if (!event) {
      return res.status(404).json({ message: "Event tidak ditemukan" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Terjadi Kesalahan", error });
  }
};

export const updateEventById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { nama, location, dateEvent, description, categoryId, pembicaraId } =
      req.body;

    const updateEventById = await prisma.event.update({
      where: { id },
      data: {
        nama,
        location,
        dateEvent: new Date(dateEvent),
        description,
        categoryId: Number(categoryId),
        pembicaraId: Number(pembicaraId),
      },
    });
    res.json(updateEventById);
  } catch (error) {
    res.status(500).json({ message: "Gagal update event!", error });
  }
};

export const deleteEventById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await prisma.event.delete({ where: { id } });
    res.json({ message: "Events berhasil dihapus!" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus event!", error });
  }
};
