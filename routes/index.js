import express from "express";
import taskRouter from "./Tasks/task.js";
import authRouter from "./Auth/auth.js";

const router = express.Router();

router.use('/task', taskRouter);

router.use('/auth', authRouter);

export default router;