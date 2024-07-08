import express from "express";
import getTaskController from "../../controllers/tasks/getTasks.controller.js";
import addTaskController from "../../controllers/tasks/addTask.controller.js";
import deleteTaskController from "../../controllers/tasks/deleteTask.controller.js";
import updateTaskController from "../../controllers/tasks/updateController.js";

const taskRouter = express.Router();

taskRouter.get('/get', getTaskController);

taskRouter.post('/create', addTaskController);

taskRouter.delete('/:id/delete', deleteTaskController);

taskRouter.put('/:id/update', updateTaskController);

// Independent to any client

export default taskRouter;