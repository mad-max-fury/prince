import React from 'react'
import ConnectBtn from '../ConnectBtn'
import { ProductCardWrapper, ProductBriefWrapper, PicFrame } from './style'
const ProductCard = ({ bgColor, imgSrc, id }) => {
  return (
    <ProductCardWrapper>
      <PicFrame>
        <img src={imgSrc} alt={id} />
      </PicFrame>
      <ProductBriefWrapper bgColor={bgColor}>
        <div>
          <h3>The problem I’m trying to solve here.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus ridiculus eu dui tempus risus orci, lacus. Tellus mus sed ut nulla. Lacus, placerat donec dui purus fringilla scelerisque.
          </p>
          <div>
            <span>#Research</span>
            <span>#Design</span>
            <span>#Prototype</span>
          </div>
          <ConnectBtn path={`/useCase/${id}`} text={'View Case study'} />
        </div>
      </ProductBriefWrapper>
    </ProductCardWrapper>
  )
}

export default ProductCard