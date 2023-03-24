import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams,paytmMerchantKey } from '../index.js';
import formidable from 'formidable';
import https from 'https';

export const addPaymentGateway = async (req,res)=>{
    try{
       let paytmChecksum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey)
       let params = {
        ...paytmParams,'CHECKSUMHASH':paytmChecksum
       }

       res.status(200).json(params);
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const paytmResponse = async (req,res)=>{
    try{
        const form = new formidable.IncomingForm();
        let paytmChecksum = req.body.CHECKSUMHASH;
        delete req.body.CHECKSUMHASH;

        let isVerifySignature = paytmchecksum.verifySignature(req.body,paytmMerchantKey,paytmChecksum);
        if(isVerifySignature){
            let paytmParams = {};
            paytmParams['MID'] = req.body.MID;
            paytmParams['ORDERID'] = req.body.ORDERID;

            paytmchecksum.generateSignature(paytmParams,paytmMerchantKey).then(function(checksum){
                paytmParams['CHECKSUMHASH'] = checksum;
                let post_data = JSON.stringify(paytmParams);
                let options={
                    hostname:'securegw-stage.paytm.in',
                    port: 443,
                    path:'/order/status',
                    headers:{
                        'Content-Type' : 'application/json',
                        'Content-Length' : post_data.length
                    }
                }
                let res= "";
                let post_req = https.request(options,function(post_res){
                    post_res.on('data',function(chunk){
                        res+=chunk;
                    });
                    post_res.on('end',function(){
                        let result = JSON.parse(res)
                        response.redirect('https://flipkart-61bv.onrender.com')
                    })
                });

                post_req.write(post_data);
                post_req.end();
            })
        }else{
            console.log('Checksum mismatched')
        }
    }catch(error){
        res.status(500).json({error: error.message})
    }
}