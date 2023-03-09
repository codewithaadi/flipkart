import React from 'react';
import {AppBar,Toolbar,styled,Box, Typography} from '@mui/material';

const StyledHeader = styled(AppBar)`
    background : #2874f0;
    height: 55px;
`
const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`

export default function Header() {
  return (
    <StyledHeader>
        <Toolbar>
            <Component>
                <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='Flipkart Logo' style={{width: 75}}/>
                <Box>
                   <Typography>Explore Plus</Typography>
                   <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="" />
                </Box>
            </Component>
        </Toolbar>
    </StyledHeader>
  )
}
