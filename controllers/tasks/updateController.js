import Task from "../../models/Task/Task.model.js";
import { ResponseHandler } from "../../utils/responseHandler.js";

const updateTaskController = (req, res, next) => {
  const id = (req.params.id); // Url 

  const item = req.body?.title;

  Task.updateOne({ _id: id }, { $set: { title: item } }).then(responses => {
    res.status(200).json(ResponseHandler(200, responses, 'Task updated successfully!'));
  }).catch(err => {
    console.log(err);
  });
};

export default updateTaskController;