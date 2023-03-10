import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './routes/route.js';
import Connection from './database/db.js';
import DefaultData from './default.js';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', Router);

app.listen(PORT,()=>{
    console.log(`Your server is running at port ${PORT}`);
})

Connection();

DefaultData();
