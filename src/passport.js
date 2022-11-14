//Passport JS
import passport from 'passport';
import LocalPassport from 'passport-local';
import GooglePassport from "passport-google-oauth2";

import dotenv from 'dotenv';
dotenv.config();

//User DB
import User, {verifyPassword} from './modules/User.js';

const LocalStratgy = LocalPassport.Strategy;
const GoogleStrategy = GooglePassport.Strategy;

// login이 최초로 성공했을 때만 호출되는 함수
// done(null, user.id)로 세션을 초기화 한다.
passport.serializeUser(function(user, done) {
    console.log('serializeUser');
    done(null, user);
})


// 사용자가 페이지를 방문할 때마다 호출되는 함수
// done(null, id)로 사용자의 정보를 각 request의 user 변수에 넣어준다.
passport.deserializeUser(async (user, done) => {
    console.log('deserializeUser');
    const _user = await User.findOne({id: user.id});
    done(null, _user);
})

//passport 사용
passport.use(new LocalStratgy({
        usernameField: 'id',
        passwordField: 'pw'
    },
    function(username, password, done) {
        User.findOne({id : username}, async (err,user) => {
            if(err) { return done(err); }
            if(!user) {
                console.log("Incorrect Username");
                return done(null, false, {message:"Incorrect Username."});
            }
            const _pw = await verifyPassword(password, user.salt, user.pw);
            if(!_pw) {
                console.log("not Matche ps");
                return done(null, false, {message:"Incorrect Password"});
            }
            
            return done(null, user);
        });
    }
));

passport.use(new GoogleStrategy({
    clientID: process.env.PASSPORT_GOOGLE_ID,
    clientSecret: process.env.PASSPORT_GOOGLE_PASSWORD,
    callbackURL: "http://localhost:8080/auth/google/callback",
    passReqToCallback: true,
}, function (request, accessToken, refreshToken, profile, done) {
    console.log(profile);
    console.log(accessToken);

    return done(null, profile);
}
))

export default passport;