import jwt from "jsonwebtoken";
import { MY_SECRET_KEY } from "../const/const.js";
import { ResponseHandler } from "../utils/responseHandler.js";
function isAuthenticated(req, res, next) {
  const token = req.headers?.authorization?.split(" ")[1];
  // Verify the token
  if (token) {
    const decodedInfomation = jwt.verify(token, MY_SECRET_KEY);
    req.user = decodedInfomation;
    next();

  } else {
    res.status(200).json(ResponseHandler(200, {}, 'Token not valid!'));
  }


}

export default isAuthenticated;