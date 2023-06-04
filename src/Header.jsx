import React from 'react'
import {AppBar, Box,styled,Typography, Toolbar} from '@mui/material'
import Search from './Search'
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';

const Component = styled(Link)`
    margin-left:12%;
    line-height:0px;
`;
const Buttonwrapper = styled(Box)`
margin : 0 5% 0 auto;
`

const Exp = styled(Typography)`
font-size:10px;
font-style:italic;
`;
const StyleHeader = styled(AppBar)`
background:#f2874f0;
heught:55px;
`

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <StyleHeader>
        <Toolbar style = {{miHeigth:50}}>
                <Component to ={'/'} style={{textDecoration : 'none'}}>
                    <img src = {logoURL} alt="logo" style = {{width : 75}}/>
                    <Exp>Explore&nbsp;
                        <Box component="span" style={{ color : '#FFE500'}}>Plus</Box>
                        <img src = {subURL} alt = "sub" style= {{width : 10  ,marginLeft : 2}} />
                    </Exp>
                </Component>
            <Search/>
            <Buttonwrapper>
                <CustomButton/>
            </Buttonwrapper>
        </Toolbar>
    </StyleHeader>
  )
}

export default Header