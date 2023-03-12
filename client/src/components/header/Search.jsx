import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//components
import { getProducts } from '../../redux/actions/productActions';

//Material UI
import { InputBase, Box, styled, ListItem, List, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    width:38%;
    border-radius: 2px;
    margin-left:15px;
    display:flex;
`;

const SearchIconWrapper = styled(Box)`
    color:blue;
    padding: 4px;
`
const InputSearchBase = styled(InputBase)`
    width:100%;
    padding-left:20px;
    font-size: unset;
`
const ListWrapper = styled(List)`
    position: absolute;
    background: #FFFFFF;
    color: #000;
    margin-top: 38px;
    width: 560px;
`
export default function Search() {
    //state
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const { products } = useSelector(state => state.getProducts);

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    //function
    const getText = (text) => {
        setText(text);
    }

    return (
        <>
            <SearchContainer>
                <InputSearchBase placeholder='Search for products,brands and more' onChange={(e) => getText(e.target.value)} value={text}/>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                {
                    text &&
                    <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <>
                                    <ListItem>
                                        <Link to={`/product/${product.id}`} onClick={()=>setText('')} style={{textDecoration:'none', color:'inherit'}}>
                                            <SearchIcon style={{ marginRight: 20 }} />{product.title.longTitle}
                                        </Link>
                                    </ListItem>
                                    <Divider />
                                </>
                            ))
                        }
                    </ListWrapper>
                }
            </SearchContainer>
        </>
    )
}
