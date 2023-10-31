import express from 'express';
import { PORT, mongoURI } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());
app.get('/',(req, res)=>{
    console.log(req);
    return res.status(234).send("hemlo");
})

app.use('/books', booksRoute);

mongoose.connect(mongoURI)
.then(()=>{
    console.log("App connected to database");

app.listen(PORT, ()=>{
    console.log(`App listening to port: ${PORT}`);
});
})
.catch()
{
    console.log("cant");
}

