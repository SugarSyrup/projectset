import express from "express";

import { getNameCard, getNameCardList, getShorten, postShorten} from '../controllers/apiController.js';

const apiRouter = express.Router();

// apiRouter.route("/user/:user_id").get().post();
apiRouter.get("/namecard/:link", getNameCard);
apiRouter.get("/namecard", getNameCardList);
apiRouter.route("/shorten").get(getShorten).post(postShorten);

export default apiRouter;