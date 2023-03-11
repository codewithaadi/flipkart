import React from 'react';

//Material UI
import { Box, Typography, styled, Button, Divider } from '@mui/material';

//Carousel
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

//Countdown
import Countdown from 'react-countdown';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

//CSS
const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
`
const Deal = styled(Box)`
    padding: 15px 20px;
    display: flex;
`
const Timer = styled(Box)`
    display: flex;
    margin-left: 10px;
    align-items:center;
    color: #7f7f7f;
`
const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    margin-right: 25px;
    line-height: 32px;
`
const ViewAllButton = styled(Button)`
    margin-left: auto;
    backgorund-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 600;
`
const Image = styled('img')({
    width: 'auto',
    height: 150
})
const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;

`
export default function Slide(props) {

    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>;
    }

    return (
        <Component>
            <Deal>
                <DealText>{props.title}</DealText>
                {props.timer && <Timer>
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" alt="timer-img" style={{ width: 24 }} />
                    <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                </Timer>}
                
                <ViewAllButton variant='contained' color='primary'>View All</ViewAllButton>
            </Deal>
            <Divider />
            <Carousel responsive={responsive} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px" containerClass="carousel-container" swipeable={false} draggable={false} infinite={true} autoPlay={true} centerMode={true} keyBoardControl={true}
                autoPlaySpeed={4000}>
                {
                    props.products.map(product => (
                        <Box textAlign="center" style={{padding: '25px 15px'}}>
                            <Image src={product.url} alt="product-img" />
                            <Text style={{fontWeight:600, color:'#212121'}}>{product.title.shortTitle}</Text>
                            <Text style={{color:'green'}}>{product.discount}</Text>
                            <Text style={{color: '#212121', opacity: '0.6'}}>{product.tagline}</Text>
                        </Box>
                    ))
                }
            </Carousel>
        </Component>
    )
}
