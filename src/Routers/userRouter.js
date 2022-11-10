import express from "express";

import { getProfile, postProfile } from '../controllers/userController.js';
import { getCreateCard, postCreateCard } from '../controllers/cardController.js';

const userRouter = express.Router();

userRouter.route("/profile").get(getProfile).post(postProfile);
userRouter.route("/createCard").get(getCreateCard).post(postCreateCard);
// userRouter.route("details").get(getDetails).post(postDetails);
// userRouter.route("show").get(getShow);

export default userRouter;