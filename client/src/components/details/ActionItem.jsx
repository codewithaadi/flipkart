import React from 'react'

//Components

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
    return (
        <LeftContainer>
            <Box style={{ border: '1px solid #f0f0f0', padding: '15px 20px', width: '90%', marginBottom: 10}}>
                <Image src={props.product.detailUrl} alt="product" />
            </Box>
            <StyledButton variant='contained' style={{ marginRight: 10, background: '#ff9f00' }}><ShoppingCartIcon />Add to Cart</StyledButton>
            <StyledButton variant='contained' style={{ background: '#fb541b' }}><FlashOnIcon />Buy Now</StyledButton>
        </LeftContainer>
    )
}
