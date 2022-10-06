import mongoose from 'mongoose'

const url = `mongodb+srv://sugarsyrup:SvyzBi5alHMKkuOv@namecard.7nnpztw.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`mongoDB connected`));
  
const db = mongoose.connection;

db.on("error", (error) => {
    console.log(error);
})
db.on("open", () => {
    console.log("mongodb : localhost is connected");
})