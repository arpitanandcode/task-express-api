import express from "express";
import getTaskController from "../../controllers/tasks/getTasks.controller.js";

const taskRouter = express.Router();

taskRouter.get('/', getTaskController);

export default taskRouter;