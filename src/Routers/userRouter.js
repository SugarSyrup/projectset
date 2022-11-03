import express from "express";

const userRouter = express.Router();

userRouter.route("details").get(getDetails).post(postDetails);
userRouter.route("show").get(getShow);

export default userRouter;