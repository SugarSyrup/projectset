import express from "express";

import { getMyProfile } from '../controllers/userController.js';
import { getCreateCard, postCreateCard } from '../controllers/cardController.js';

const userRouter = express.Router();

userRouter.route("/my-profile").get(getMyProfile).post();
userRouter.route("/createCard").get(getCreateCard).post(postCreateCard);
// userRouter.route("details").get(getDetails).post(postDetails);
// userRouter.route("show").get(getShow);

export default userRouter;