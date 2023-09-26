import express from "express";
import { createPromptImage } from "../controllers/dalle.js";

const router = express.Router();

router.route("/").post(createPromptImage);

export default router;
