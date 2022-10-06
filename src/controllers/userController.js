export const getLogin = (req,res) => {
    return res.render("login");
}

export const postLogin = (req,res) => {
    console.log(req.body);
    return res.render("status", {status : "Success"});
}