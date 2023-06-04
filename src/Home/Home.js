import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { Fragment } from 'react'
import { Box,styled } from '@mui/system'
import { useEffect } from 'react'
import { getProduct } from '../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide'
import Midslide from './Midslide'
import MidSection from './MidSection'

const Components = styled(Box)`
padding :10px;
background : #F2F2F2;
`

const Home = () => {

  const {products} = useSelector(state => state.getProducts);
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(getProduct())
  },[dispatch])
  return (
    <>
       <NavBar/>
       <Components>
           <Banner/>
           <Midslide products = {products} title = "Deal of the day" timer = {true}/>
           <MidSection/>
           <Slide products = {products} title = "Deal of the day" timer = {false}/>
           <Slide products = {products}title = "Deal of the day" timer = {false}/>
           <Slide products = {products}title = "Deal of the day" timer = {false}/>
       </Components>       
    </>
  
  )
}

export default Home;