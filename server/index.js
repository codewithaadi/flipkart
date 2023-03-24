import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './routes/route.js';
import Connection from './database/db.js';
import DefaultData from './default.js';
import dotenv from 'dotenv';
import {v4 as uuid} from 'uuid';

dotenv.config();

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

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'https://flipkart-server-9plv.onrender.com/callback';
paytmParams['EMAIL'] = 'testuser123@gmail.com';
paytmParams['MOBILE_NO']= '123456789';