import React from 'react'
import { InputBase } from '@mui/material'
import { Box } from '@mui/system'
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
background : #fff;
width : 38%;
margin-left: 10px;
border-radius: 2px;
display : flex;
`;

const SearchBar = styled(InputBase)`
padding-left:10px;
width:100%;
font-size : unset;
`;
const SearchI  = styled(Box)`
padding : 5px;
color: blue;
display : flex;
`

const Search = () => {
  return (
    <SearchContainer>
    <SearchBar
    placeholder='Search for products, brands and more'/>

    <SearchI>
    <SearchIcon/>
    </SearchI>

    </SearchContainer>
  )
}

export default Search