import React from 'react'

//components
import Navbar from './Navbar';
import Banner from './Banner';

//MUI
import { Box,styled } from '@mui/material';

const Component = styled(Box)`
    padding: 18px 0 10px 0;
    background: #F2F2F2;
`

export default function Home() {
    return (
        <>
            <Navbar />
            <Component>
                <Banner />

            </Component>
        </>
    )
}
