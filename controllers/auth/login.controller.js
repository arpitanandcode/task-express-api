
import { MY_SECRET_KEY } from "../../const/const.js";
import Auth from "../../models/Auth/Auth.model.js";
import { ResponseHandler } from "../../utils/responseHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginController = (req, res, next) => {
  const { email, password } = req.body;

  Auth.find({ email }).then((response) => {
    if (response.length < 0) {
      res.status(200).json(ResponseHandler(200, response, 'User not exists! Please register!'));
    } else {
      bcrypt.compare(password, response[0]?.password, function (err, result) {
        if (result) {
          // Token expose 
          // Token generate 
          const token = jwt.sign({ email: response[0]?.email, id: response[0]?._id }, MY_SECRET_KEY);

          const myUser = { email: response[0]?.email, id: response[0]?._id, token };

          res.status(200).json(ResponseHandler(200, myUser, 'Logged in sucessfully!'));
        } else {
          res.status(200).json(ResponseHandler(200, response, 'Email / Password wrong!'));
        }
      });
    }
  });

};

export default loginController;
