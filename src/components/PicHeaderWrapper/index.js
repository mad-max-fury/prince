import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { colors } from '../../colors'
const PicHeaderWrapper = ({ heading, paragraph, imgSrc, height, vidSrc }) => {
  return (
    <PicHead>
      <DHeader height={height}>
        <div>
          <h1>{heading}</h1>
          <p>{paragraph} </p>
          {vidSrc ?
            <div>
              <ReactPlayer height={'100%'} width='100%' controls url={vidSrc} />
            </div>
            : <img src={imgSrc} alt={heading} />}
        </div>
      </DHeader>
    </PicHead>
  )
}

export default PicHeaderWrapper


const PicHead = styled.div`
width:80vw;
margin:auto;
// border:1px solid red;
`
const DHeader = styled.div`
& > div{
  width:100%;
  display:flex;
  flex-direction:column;
  gap:1rem;
  & > h1{
    font-size:24px;
    color:${colors.white};
  }
  & > P{
    color:${colors.grey_text};
    font-size:15px;
    line-height:24px;
  }
  & > img{
    height:${({ height }) => height ? height : '80vh'};
    @media screen and (max-width:768px){
      height:30vh;
    }
  }
    & > div{
    height:${({ height }) => height ? height : '80vh'};
    @media screen and (max-width:768px){
      height:30vh;
    }
  }
}
`