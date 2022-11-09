import express from "express";
import passport from "../passport.js";

import {getLogin, postLogin} from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.route("/login").get(getLogin).post(
    passport.authenticate('local', {
        successRedirect: '/user/my-profile',
        failureRedirect: '/auth/login'
    })
);
// authRouter.post("/login_process", loginProcess);
authRouter.route("/join");
authRouter.route("/join/google");
authRouter.route("/join/kakao");
authRouter.route("/join/naver");
authRouter.route("/logout");

export default authRouter;