import express from "express";
import registerController from "../../controllers/auth/register.controlle.js";
import loginController from "../../controllers/auth/login.controller.js";

const authRouter = express.Router();

authRouter.post('/register', registerController); // GET CALL.

authRouter.post('/login', loginController); // GET CALL.

export default authRouter;