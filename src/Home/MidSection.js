import React from 'react'
import { imageURL } from '../Data/Data'
import { styled } from '@mui/material'
import { Grid } from '@mui/material'


const Wrapper = styled(Grid)`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
`;

const MidSection = () => {
  return (
    <Wrapper lg={12} md={12} sm={12} xs={12} container>
            {
                imageURL.map(image => (
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                    <img src={image} alt="image"style={{width:'100%'}}/>
                    </Grid>
                ))
            }
    </Wrapper>
  )
}

export default MidSection