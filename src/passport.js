//Passport JS
import passport from 'passport';
import LocalStratgy from 'passport-local';

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
        return done(null, username);
    }
));

export default passport;