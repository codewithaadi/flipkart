import React from 'react';
import { useState } from 'react';

//Material UI
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box, Typography,Menu,MenuItem,styled } from '@mui/material';

//CSS
const Component = styled(Menu)`
    margin-top: 5px;
`
const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 15px;
`

export default function Profile({ account,setAccount }) {

    //State
    const[open,setOpen] = useState(false);

    const handleClick = (e)=>{
        setOpen(e.currentTarget)
    }

    const handleClose = ()=>{
        setOpen(false);
    }

    const logout = ()=>{
        setAccount('');
    }

    return (
        <>
            <Box onClick={handleClick}><Typography style={{ marginTop: 3 , cursor:'pointer'}}>{account}</Typography></Box>
            <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
                <MenuItem onClick={()=>{handleClose(); logout();}}>
                    <PowerSettingsNewIcon color="primary" fontSize='small'/>
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </>
    )
}
