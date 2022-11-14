import express from "express";

const rootRouter = express.Router();

rootRouter.get("/", (req,res) => {
    res.redirect("/auth/login");
});

export default rootRouter;