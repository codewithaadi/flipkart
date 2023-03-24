import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

//Components
import {addToCart} from '../../redux/actions/cartAction';
import { payUsingPaytm } from '../../service/api';
import {post} from '../../utils/paytm'

//MUI
import { Box, Button, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

//CSS
const LeftContainer = styled(Box)(({theme})=>({
    minWidth: '40%',
    padding : '40px 0 0 80px',
    [theme.breakpoints.down('lg')] : {
        padding: '20px 40px'
    }
}));

const Image = styled('img')({
    width: '95%',
    padding: '15px'
})

const StyledButton = styled(Button)(({theme})=>({
    width: '48%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')] : {
        width: '46%'
    },
    [theme.breakpoints.down('sm')] : {
        width: '48%'
    }
}))

export default function ActionItem(props) {
    //variables
    const{id} = props.product;

    //customHooks
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity,setQuantitiy] = useState(1);
    //function
    const addItemToCart = ()=>{
        dispatch(addToCart(id,quantity));
        navigate('/cart')
    }


    const buyNow =async ()=>{
        let response = await payUsingPaytm({amount:500,email:'codewithaadi31@gmail.com'});
        let informaton = {
            action : 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(informaton);
    }
    return (
        <LeftContainer>
            <Box style={{ border: '1px solid #f0f0f0', padding: '15px 20px', width: '90%', marginBottom: 10}}>
                <Image src={props.product.detailUrl} alt="product" />
            </Box>
            <StyledButton variant='contained' onClick={()=> addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }}><ShoppingCartIcon />Add to Cart</StyledButton>
            <StyledButton variant='contained' style={{ background: '#fb541b' }} onClick={()=>buyNow()}><FlashOnIcon />Buy Now</StyledButton>
        </LeftContainer>
    )
}
