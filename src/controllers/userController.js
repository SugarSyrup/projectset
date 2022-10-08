import User from '../modules/User';

export const getLogin = (req,res) => {
    return res.render("login");
}

export const postLogin = (req,res) => {
    console.log(req.body);
    return res.render("status", {status : "Success"});
}

export const getJoin = (req,res) => {
    return res.render("join");
}

export const postJoin = (req,res) => {
    return res.render("")
}