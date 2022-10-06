import express from "express";

import { getLogin, postLogin} from "./controllers/userController.js";

const rootRouter = express.Router();

rootRouter.route("/").get(getLogin).post(postLogin);



export default rootRouter;