import React from 'react'

//Material UI
import { InputBase,Box,styled} from '@mui/material';
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

export default function Search() {
    return (
        <>
            <SearchContainer>
                <InputSearchBase placeholder='Search for products,brands and more'/>
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
            </SearchContainer>
        </>
    )
}
