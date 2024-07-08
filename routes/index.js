import express from "express";
import taskRouter from "./Tasks/task.js";
import authRouter from "./Auth/auth.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.use('/task', isAuthenticated, taskRouter);

router.use('/auth', authRouter);

export default router;