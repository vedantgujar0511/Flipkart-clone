import { Box, styled, Typography} from '@mui/material'
import { useState,useContext } from 'react';
import React from 'react'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from './login/LoginDialog.js';
import { DataContext } from './context/DataProvider';
import Profile from './header/Profile.js';


const Loginb = styled(Button)`
   color : #2874f0;
   background : #FFFFFF;
   text-transform : none;
   padding: 5px 40px;
   fontWeight: 600;
   borderRadius: 2px;
   height: 32px;
    boxShadow: 'none';
`;

const Headeoption  = styled(Box)`
display: flex;
margin : 0 3% 0 auto;
&>button, &>p , &>div{
    margin-right:40px;
    font-size:16px;
    alig-items:centre;
}
`;
const Shoppingcart = styled(Box)`
display:flex;
`

const CustomButton = () => {
  const [open,setOpen] = useState(false);
  const {account,setAccount} = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  }
  return (
    <Headeoption>
      {
        account ? <Profile account = {account} setAccount = {setAccount}/> :
            <Loginb variant="contained" onClick={ () => openDialog()}>Login</Loginb>
      }
       
        <Typography style = {{marginTop:3, width:135}}>Become a Seller</Typography>
        <Typography style = {{marginTop:3}}>more</Typography>

        <Shoppingcart>
            <ShoppingCartIcon/>
            <Typography>cart</Typography>
        </Shoppingcart>
        <LoginDialog open={open} setOpen = {setOpen}/>
    </Headeoption>
  )
}

export default CustomButton