import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Components
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

//Material UI
import { Box, Button, Typography, styled, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > *': {
        marginRight: '40px !important',
        fontSize: '16px',
        alignItems: 'center',
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
    &:hover {
        color: #2874f0;
        background: #fff;
    }
`

export default function CustomButtons() {

    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);
    const {cartItems} = useSelector(state=>state.cart) 

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> : <LoginButton variant='container' onClick={() => openDialog()} >Login</LoginButton>
            }

            <Typography style={{ marginTop: 3, width: 135, fontWeight: 500 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>

            <Container to='/cart'>
                <Badge badgeContent={cartItems?.length} color='secondary'>
                    <ShoppingCartIcon />
                </Badge>
                <Typography style={{marginLeft:10}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}
