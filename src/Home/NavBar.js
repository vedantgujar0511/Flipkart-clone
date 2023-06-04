import React from 'react'
import { navData } from '../Data/Data'
import { Box,styled } from '@mui/system'
import { Typography } from '@mui/material'
const Components = styled(Box)(({theme}) => ({
display:'flex',
margin: '55 130 0 130',
justifyContent: 'space-between',
overflow:'hidden',
[theme.breakpoints.down('lg')]:{
  margin:0,
}
}));
const Container = styled(Box)`
padding : 12px 8px
text-align: centre:
`
const Text = styled(Typography)`
font-size : 14px;
font-weight: 600;
font-family: inherit;
`

const NavBar = () => {
  return (
    <Components>
        {
            navData.map(data => ( 
                <Container>
                    <img src={data.url} alt="nav" style = {{width:64}}/>
                    <Text>{data.text}</Text>
                </Container>
            ))
        }
    </Components>
  )
}

export default NavBar