import express from "express";
import {
    getAllSpeakers,
    createSpeaker,
    getSpeakerById,
    updateSpeakerById,
    deleteSpeakerById
} from "../controllers/pembicaraController.js";

const router = express.Router();

router.get("/", getAllSpeakers);
router.post("/", createSpeaker);
router.get("/:id", getSpeakerById);
router.put("/:id", updateSpeakerById);
router.delete("/:id", deleteSpeakerById);

export default router;