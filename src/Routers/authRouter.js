import express from "express";
import passport from "../passport.js";

import {getLogin, postLogin} from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.route("/login").get((req,res) => res.render('login')).post(
    passport.authenticate('local', {
        successRedirect: '/user/my-profile',
        failureRedirect: '/'
    })
);
authRouter.route("/join");
authRouter.route("/join/google");
authRouter.route("/join/kakao");
authRouter.route("/join/naver");
authRouter.route("/logout");

export default authRouter;