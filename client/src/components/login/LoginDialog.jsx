import React from 'react';
import { useState } from 'react';
import { authenticateSignup } from '../../service/api';

//Material UI
import { Box, Button, Dialog, TextField, Typography, styled } from '@mui/material';

//CSS Handling
const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
`
const Image = styled(Box)`
    background: #2874F0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width:30%;
    height:100%;
    padding: 45px 35px;
    &>p, &>h5{
        color: #fff;
        font-weight: 200;
        width: 70%;
    }
`
const Wrapper = styled(Box)`
    display:flex;
    flex-direction: column;
    padding:25px 35px;
    flex:1;
    &>div , &>button, &>p{
        margin-top: 20px;
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color:#fff;
    height: 48px;
    border-radius:2px;
`
const RequestOtp = styled(Button)`
    text-transform: none;
    background: #fff;
    color:#2874f0;
    height: 48px;
    border-radius:2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`
const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`
const CreateAccount = styled(Typography)`
    font-size:14px;
    text-align: center;
    color: #2874f0;
    font-weight:600;
    cursor: pointer;
`

//Objects
const accountInitialValues = {
    login:{
        view:'login',
        heading: "Login",
        subHeading: 'Get access to your Orders, WishList and Recommendations'
    },
    signup:{
        view:'signup',
        heading: "Looks Like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username : '',
    email : '',
    password: '',
    phone : ''
}

export default function LoginDialog(props) {

    //state
    const [account,toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);

    //functions
    const handleClose = () => {
        props.setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    const toggleSignup = ()=>{
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e)=>{
        setSignup({...signup,[e.target.name] : e.target.value });
    }

    const signupUser = async ()=>{
        let response = authenticateSignup(signup);
    }

    return (
        <Dialog open={props.open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component >
                <Box style={{ display: 'flex', height: '82.8%' }}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Image>
                    {  account.view === 'login' ? 
                        <Wrapper>
                            <TextField variant='standard' label="Enter Email/Mobile Number" />
                            <TextField variant='standard' label="Password" />
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy. </Text>
                            <LoginButton>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <RequestOtp>Request OTP</RequestOtp>
                            <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart ? Create an Account</CreateAccount>
                        </Wrapper> :
                        <Wrapper>
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="firstname" label="Enter First Name" />
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="lastname" label="Enter Last Name" />
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="username" label="Enter Username" />
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="email" label="Enter Email" />
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="password" label="Enter Password" />
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="phone" label="Enter Phone" />
                            <LoginButton onClick = {()=>signupUser()}>Continue </LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}
