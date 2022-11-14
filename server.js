import  express  from "express";
import session from 'express-session';
// import filestore from 'session-file-store';
import MongoStore from 'connect-mongo';

import "./src/db.js";
import passport from "./src/passport.js";

import rootRouter from "./src/Routers/rootRouter.js";
import apiRouter from "./src/Routers/apiRouter.js";
import userRouter from "./src/Routers/userRouter.js";
import authRouter from "./src/Routers/authRouter.js";

const app = express();
const port = process.env.PORT || 3000;

app.set('views', process.cwd() + "/src/views");
app.set('view engine','pug');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(session({
    secret:'keyboard cat', //Required, 타인에게 노출되면 안되는 코드, 
    resave:false, // false
    saveUninitialized: true, //Session 이 필요하기 전까지는 Session을 구동하지 않는다.
    store: MongoStore.create({mongoUrl:`mongodb+srv://sugarsyrup:SvyzBi5alHMKkuOv@namecard.7nnpztw.mongodb.net/?retryWrites=true&w=majority`}),
    cookie:{maxAge:(3.6e+6)*24}
}));

//passport JS
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('views'));
app.use(express.static("static"));

app.use("/", rootRouter);
app.use("/api", apiRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
    console.log('express server is learing : http://localhost:3000');
})