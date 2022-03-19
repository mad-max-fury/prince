import React from 'react'
import styled from 'styled-components'
import { colors } from '../../colors'
import ConnectBtn from '../../components/ConnectBtn'
import ProductCard from '../../components/productCard'
import SecHeader from '../../components/sectionHeader'

const ProductSection = () => {
  return (
    <ProductSliderSection id='projects'>
      <SecHeader heading={'My Projects'} paragraph={'Few of my recent works both personal project and for clients'} />
      <ProductCard imgSrc={'/images/imagep1.png'} id={"1"} />
      <ProductCard imgSrc={'/images/imagep2.png'} id={"2"} bgColor={colors.general_bg} />
      <ProductCard imgSrc={'/images/imagep3.png'} id={"3"} />
      <ProductCard imgSrc={'/images/imagep4 .png'} id={"4"} bgColor={colors.general_bg} />
      <span>
        <ConnectBtn text={'See more on behance'} />
      </span>
    </ProductSliderSection>
  )
}

export default ProductSection

const ProductSliderSection = styled.section`
width:100%;
height:fit-content;
background:${colors.general_bg};
// margin-top:2rem;
color:${colors.white};
text-align:center;
font-size:80px;
& > span{
  // border:1px solid red;
  width:100%;
  height:10rem;
  display:flex;
  background:${colors.main_color};
  align-items:center;
  justify-content:center;
}
@media screen and (max-width:768px){
   width:100vw;
   height:fit-content;
}
`