import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//components
import Navbar from './Navbar';
import Banner from './Banner';
import { getProducts } from '../../redux/actions/productActions';

//MUI
import { Box, styled } from '@mui/material';

const Component = styled(Box)`
    padding: 18px 0 10px 0;
    background: #F2F2F2;
`

export default function Home() {

    const { products } = useSelector(state => state.getProducts)
    //Custom Hook
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <>
            <Navbar />
            <Component>
                <Banner />
            </Component>
        </>
    )
}
