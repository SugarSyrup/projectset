import express from "express";

import {getUser, postUser, getNameCard} from '../controllers/apiController.js';

const apiRouter = express.Router();

apiRouter.route("/user/:user_id").get().post();
apiRouter.get("/:link", getNameCard);

export default apiRouter;