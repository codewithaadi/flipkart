import React from 'react'

//Components

//MUI
import { Box, Button, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

//CSS
const LeftContainer = styled(Box)`
    min-width: 40%;
    padding: 40px 0 0 80px;
`
const Image = styled('img')({
    padding: 15
})

const StyledButton = styled(Button)`
    width: 46%;
    height: 50px;
    border-radius: 2px;
`
export default function ActionItem(props) {
    return (
        <LeftContainer>
            <Box style={{  border: '1px solid #f0f0f0', padding: '15px 20px', width: '90%'}}>
                <Image src={props.product.detailUrl} alt="product" />
            </Box>
            <StyledButton variant='contained' style={{ marginRight: 10, background: '#ff9f00' }}><ShoppingCartIcon />Add to Cart</StyledButton>
            <StyledButton variant='contained' style={{ background: '#fb541b' }}><FlashOnIcon />Buy Now</StyledButton>
        </LeftContainer>
    )
}
