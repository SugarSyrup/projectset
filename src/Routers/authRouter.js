import express from "express";
import passport from "../passport.js";

import {getLogin, getJoin, postJoin, postLogout} from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.route("/login").get(getLogin).post(
    passport.authenticate('local', {
        successRedirect: '/user/profile',
        failureRedirect: '/auth/login'
    })
);
// authRouter.post("/login_process", loginProcess);
authRouter.route("/join").get(getJoin).post(postJoin);
authRouter.route("/join/google");
authRouter.route("/join/kakao");
authRouter.route("/join/naver");
authRouter.route("/logout").post((req, res) => {
    req.logout();
    req.session.save(function(){
        res.redirect('/');
    })
});

export default authRouter;