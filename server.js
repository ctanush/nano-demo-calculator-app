const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    
    return res.send('Hello World!'),200;
});

baseRouter.post('/add', (req, res) => {
    const rq = req.body;
    const frst = rq['first'];
    const sec = rq['second'];
    let ans = frst+sec;
    res.json({ "result": ans });
});


baseRouter.post('/subtract', (req, res) => {
    const rq = req.body;
    const frst = rq['first'];
    const sec = rq['second'];
    let ans = frst-sec;
    res.json({ "result": ans });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});