import React from 'react'

//components
import Slide from './Slide';

//MUI
import { Box,styled } from '@mui/material';

//CSS
const Component = styled(Box)`
    display: flex;
`
const LeftComponent = styled(Box)(({theme})=>({
    width: '83%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }
}));

const RightComponent = styled(Box)(({theme})=>({
    background: '#ffffff',
    padding: '2px',
    marginTop: '10px',
    marginLeft: '10px',
    width: '17%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}));
    

export default function MidSlide({products,title,timer}) {
  return (
    <Component>
        <LeftComponent>
            <Slide products={products} title={title} timer={timer}/>
        </LeftComponent>
        <RightComponent>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/4dd3fd6c6edbe208.jpeg?q=70" alt="ad" style={{width:217}}/>
        </RightComponent>
    </Component>
  )
}
