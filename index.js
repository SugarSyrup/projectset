import  express  from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Home Page Route'));
app.get('/about', (req, res) => res.send('About Page Route'));
app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));
app.get('/contact', (req, res) => res.send('Contact Page Route'));

app.listen(port, () => {
    console.log('express server is learing : http://localhost:3000');
})