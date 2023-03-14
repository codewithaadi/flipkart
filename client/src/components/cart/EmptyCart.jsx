import React from 'react'

//MUI
import { Box,styled,Typography } from '@mui/material';
//CSS
const Component = styled(Box)`
    height: 65vh;
    width: 80%;
    background: #fff;
    margin: 80px 140px;
`
const Container=  styled(Box)`
    text-align: center;
    padding-top: 70px;
`

export default function EmptyCart() {

const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

  return (
    <Component>
        <Container>
            <img src={imgurl} alt="emptycartImage" style={{width: '30%'}} />
            <Typography style={{marginTop:20}} variant='h5'>Your Cart is Empty!</Typography>
            <Typography style={{marginTop:10,fontSize:12}}>Add Items to your Cart</Typography>
        </Container>
    </Component>
  )
}

