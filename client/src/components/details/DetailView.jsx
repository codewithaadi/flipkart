import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

//Components
import { getProductDetails } from '../../redux/actions/productActions';
import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';

//MUI
import { Box, Typography, Grid, styled } from '@mui/material';

//CSS
const Component = styled(Box)`
    background : #f2f2f2;
    margin-top : 55px;
`
const Container = styled(Grid)`
    background : #FFFFFF;
    display: flex;
`
const RightContainer = styled(Grid)`
    margin-top : 50px;
`
export default function DetailView() {

  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector(state => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id)
      dispatch(getProductDetails(id))
  }, [dispatch, id, product, loading])

  return (
    <Component>
      {
        !loading

        &&

        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <Typography> {product.title.longTitle} </Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}> 8 Rating & 1 Reviews
            <Box>
                <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt='f-assured' style={{width:77, marginLeft:20}}/>
            </Box>
            </Typography>
            <Typography>
                <Box component='span' style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{color:'#878787'}}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{color:'#388E3C'}}>{product.price.discount}</Box>
            </Typography>
          </RightContainer>
        </Container>
      }
    </Component>
  )
}
