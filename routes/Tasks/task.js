import express from "express";
import getTaskController from "../../controllers/tasks/getTasks.controller.js";
import addTaskController from "../../controllers/tasks/addTask.controller.js";

const taskRouter = express.Router();

taskRouter.get('/get', getTaskController); // GET CALL.

taskRouter.post('/create', addTaskController);

export default taskRouter;