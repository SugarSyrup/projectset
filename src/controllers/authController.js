import User from "../modules/User.js";
import passport from "../passport.js";

export const getLogin = (req,res) => {
    // console.log(req.session);
    // if(req.session.num == undefined) {
    //     req.session.num = 1;
    // } else {
    //     req.session.num = req.session.num + 1;
    // }
    // let views = req.session.num;
    return res.render("login.html");
}

export const postLogin = async (req,res) => {
    const {id, pw} = req.body;
    console.log(req.body);
    
    const _user = await User.findOne({id});
    if(!_user) {
        console.log("id not founded");
        return res.redirect("/");
    }

    const _pw = await verifyPassword(pw, _user.salt, _user.pw);
    if(!_pw) {
        console.log("password is not matched!");
        return res.redirect("/");
    }

    req.session.user = _user;
    req.session.isLoggedIn = true;
    
    return res.redirect("/user/my-profile");
}

export const getJoin = (req,res) => {
    return res.render("join");
}

export const postJoin = async (req,res) => {
    const {id, pw, pw2} = req.body;
    const {name, email, number, links} = req.body;


    const _user = await User.findOne({id});
    if(_user) {
        console.log("id is already exists");
        return res.redirect("/join");
    }

    if(pw !== pw2){
        console.log("password is not matched");
        return res.redirect("/join");
    }
    const {hashedPassword, salt} = await createHashedPassword(pw);

    await User.create({
        id,pw: hashedPassword,name,email,number,links,salt
    })

    console.log("Join Completed");
    return res.redirect("/");
}

export const postLogout = (req, res) => {

    return res.render("/");
}