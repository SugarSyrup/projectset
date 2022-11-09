//Passport JS
import passport from 'passport';
import LocalStratgy from 'passport-local';

//DB
import User, {verifyPassword} from './modules/User.js';

passport.serializeUser(function(user, done) {
    console.log('serializeUser', user);
    done(null, user);
})
passport.deserializeUser(function(id, done) {
    console.log('deserializeUser', id);
    done(null, id);
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
                return(done, false, {message:"Incorrect Username."});
            }
            const _pw = await verifyPassword(password, user.salt, user.pw);
            if(!_pw) {
                return(done, false, {message:"Incorrect Password"});
            }
            
            return done(null, user);
        })
    }
));

export default passport;