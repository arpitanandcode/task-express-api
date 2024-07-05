import express from "express";

const authRouter = express.Router();

authRouter.get('/login', (req, res, next) => {
  res.json({ 'Login': 'Login router' })
}); // GET CALL.

export default authRouter;