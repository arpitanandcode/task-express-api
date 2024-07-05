import Task from "../../models/Task/Task.model.js";
import { ResponseHandler } from "../../utils/responseHandler.js";

const getTaskController = (req, res, next) => {
  // ! GET ALL TASKS.

  Task.find().then(response => {
    res.status(200).json(ResponseHandler(200, response, 'Task fetched sucessfully!'));
  }).catch(err => {
    console.log(err);
  })

};

export default getTaskController;