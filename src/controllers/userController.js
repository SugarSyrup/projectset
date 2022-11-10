import User, { createHashedPassword, verifyPassword } from '../modules/User.js';

//user Router
export const getProfile = (req,res) => {
    // const _user = User.findById()
    // console.log(req.user);
    
    console.log("my-profile");
    console.log(req.session);
    
    return res.render("myProfile", {status:"LogIn Complete", user: req.session.passport.user});
}

export const postProfile = (req, res) => {

    return res.render("myProfile", {status:"_status Variables", user:JSON.stringify(req.session.passport.user)});
}
