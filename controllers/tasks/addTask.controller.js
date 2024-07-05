import Task from "../../models/Task/Task.model.js";
import { ResponseHandler } from "../../utils/responseHandler.js";

const addTaskController = (req, res, next) => {
  // body-parser
  console.log(req.body);
  const list = req.body?.todo;

  const obj = { title: list };

  Task.create(obj).then(response => {
    res.status(201).json(ResponseHandler(201, response, 'Task created sucessfully!'))
  }).catch(err => {
    console.error(err);
  })
};

export default addTaskController;