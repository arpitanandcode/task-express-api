
import Auth from "../../models/Auth/Auth.model.js";
import { ResponseHandler } from "../../utils/responseHandler.js";
import bcrypt from "bcrypt";

const SALT = 10;

const registerController = (req, res, next) => {
  const { email, password } = req.body;

  Auth.find({ email }).then((response) => {
    if (response.length > 0) {
      res.status(200).json(ResponseHandler(200, response, 'User exists, Please login'));
    } else {
      bcrypt.genSalt(SALT, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          Auth.create({ email, password: hash }).then(respos => {
            res.status(200).json(ResponseHandler(200, respos, 'User registered successfully'));
          })
        });
      });
    }
  });

};

export default registerController;
