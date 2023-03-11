import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//components
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
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
                <MidSlide products={products} title="Deal of the Day" timer={true}/>
                <MidSection/>
                <Slide products={products} title="Discounts for You" timer={false}/>
                <Slide products={products} title="Suggested Items" timer={false}/>
                <Slide products={products} title="Top Selection" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Top Deals on Accessories" timer={false}/>
               
            </Component>
        </>
    )
}
