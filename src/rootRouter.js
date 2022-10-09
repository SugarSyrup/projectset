import express from "express";

import { getLogin, postLogin, getJoin, postJoin} from "./controllers/userController.js";

const rootRouter = express.Router();

rootRouter.route("/").get(getLogin).post(postLogin);
rootRouter.route("/join").get(getJoin).post(postJoin);



export default rootRouter;