import express from "express";
import authRouter from "./auth.router.js";
import userRouter from "./signup.router.js";
import gameRouter from "./game.router.js";
import sheetRouter from "./sheet.router.js";

const router = express.Router();

router.use("/api", authRouter);
router.use("/api", userRouter);
router.use("/api", gameRouter);
router.use("/api", sheetRouter);

export default router;
