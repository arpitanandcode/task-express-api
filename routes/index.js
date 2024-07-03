import express from "express";
import taskRouter from "./Tasks/task.js";

const router = express.Router();

router.use('/task', taskRouter);

export default router;