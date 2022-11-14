import express from "express";

import { getProfile, postProfile } from '../controllers/userController.js';
import { getCreateCard, postCreateCard, getNameCard, postNameCard } from '../controllers/cardController.js';

const userRouter = express.Router();

userRouter.route("/profile").get(getProfile).post(postProfile);
userRouter.route("/createCard").get(getCreateCard).post(postCreateCard);
userRouter.route("/namecard/:id").get(getNameCard).post(postNameCard);

export default userRouter;