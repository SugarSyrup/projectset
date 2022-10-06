import express from "express";

import {login} from "./controllers/userController.js";

const rootRouter = express.Router();

rootRouter.get("/", login);


export default rootRouter;