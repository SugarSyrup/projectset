//Passport JS
import passport from 'passport';
import LocalStratgy from 'passport-local';

//DB
import User, {verifyPassword} from './modules/User.js';

passport.serializeUser(function(user, done) {
    console.log('serializeUser', user);
    done(null, user);
})
passport.deserializeUser(async (user, done) => {
    console.log('deserializeUser', user.id);
    const _user = await User.findOne({id: user.id});
    console.log("asdf", _user);
    done(null, _user);
})

//passport 사용
passport.use(new LocalStratgy.Strategy({
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

export default passport;