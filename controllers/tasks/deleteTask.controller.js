import Task from "../../models/Task/Task.model.js";
import { ResponseHandler } from "../../utils/responseHandler.js";

const deleteTaskController = (req, res, next) => {
  const id = (req.params.id);

  Task.deleteOne({ _id: id }).then(response => {
    res.status(200).json(ResponseHandler(200, response, 'Task deleted successfully!'));
  }).catch(err => {
    console.log(err);
  })

};

export default deleteTaskController;