import  express  from "express";

import rootRouter from "./src/rootRouter.js";

const app = express();
const port = process.env.PORT || 3000;

app.set('views', process.cwd() + "/src/views");
app.set('view engine','pug');

app.use(express.static('views'));
app.use("/", rootRouter);

app.listen(port, () => {
    console.log('express server is learing : http://localhost:3000');
})