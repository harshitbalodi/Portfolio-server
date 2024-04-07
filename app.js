import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/', (req, res) => {
    res.send('Hello World!');
})

export default app;
