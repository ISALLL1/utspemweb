import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

//1. Menampilkan semuan kategori
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.categoryEvent.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan saat mengambil category",
      error,
    });
  }
};

//2. Menyimpan data kategoori
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { nama, description } = req.body;

    if (!nama || !description) {
      return res
        .status(400)
        .json({ message: "Nama dan deskripsi harus diisi" });
    }

    const newCategory = await prisma.categoryEvent.create({
      data: {
        nama,
        description,
      },
    });

    res.status(201).json(newCategory);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat membuat category", error });
  }
};

//3. Menampilkan data category berdasarkan id
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const category = await prisma.categoryEvent.findUnique({
      where: { id },
    });

    if (!category) {
      return res.status(404).json({
        message: "Category tidak ditemukan",
      });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error,
    });
  }
};

//4. mengupdate data category berdasarkan id
export const updateCategoryById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { nama, description } = req.body;

    const updateCategoryById = await prisma.categoryEvent.update({
      where: { id },
      data: { nama, description },
    });
    res.json(updateCategoryById);
  } catch (error) {
    res.status(500).json({ message: "Gagal update category", error });
  }
};

//5. menhapus data category berdasarkan id
export const deleteCategoryById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await prisma.categoryEvent.delete({ where: { id } });
    res.json({ message: "Category berhasil dihapus" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Gagal menghapus category",
      error,
    });
  }
};
