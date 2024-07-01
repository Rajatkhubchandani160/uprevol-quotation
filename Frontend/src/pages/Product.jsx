import React from 'react'
import Categorylist from '../Components/Categorylist'
import Bannerproduct from '../Components/Bannerproduct'
import Horizontalproductcard from '../Components/Horizontalproductcard'
import Verticalproductcard from '../Components/Verticalproductcard'

const Product = () => {
  return (
    <>
    <Categorylist/>
    <Bannerproduct/>
    <Horizontalproductcard category={"airpods"} heading={"Top's Airpodes"}/>
    <Horizontalproductcard category={"watches"} heading={"Popular Watches"}/>
    <Horizontalproductcard category={"earphones"} heading={"Bluetooth Earphones"}/>
    <Verticalproductcard category={"television"} heading={"Popular Televisions"}/>
    <Verticalproductcard category={"refrigerator"} heading={"Popular refrigerator"}/>
    <Verticalproductcard category={"mobiles"} heading={"Top Deals"}/>
    </>
    
  )
}

export default Product