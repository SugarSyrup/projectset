import express from "express";

import { getLogin, postLogin, getJoin, postJoin, getJoinGit} from "../controllers/userController.js";

const rootRouter = express.Router();

rootRouter.get("/", (req,res) => {
    res.redirect("/auth/login");
})
// rootRouter.route("/").get(getLogin).post(postLogin);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/join/github").get(getJoinGit);

export default rootRouter;