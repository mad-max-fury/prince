import React from 'react'
import styled from 'styled-components'
import { colors } from '../../colors'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInner>
        <Aside>
          <div>
            <img src='/images/Be.svg' />
          </div>
          <div>
            <img src='/images/twitter.svg' />
          </div>
          <div>
            <img src='/images/insta.svg' />
          </div>
          <div>
            <img src='/images/in.svg' />
          </div>
          <div>
            <img src='/images/un.svg' />
          </div>
        </Aside>
        <Aside>©2021 Princechijioke, All Right Reserved</Aside>
      </FooterInner>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
z-index:1000;
margin-top:5rem;
height:5rem;
max-width:100%;
background:#D4D9EB;
box-shadow: 0px 0px 8px ${colors.main_color};
@media screen and (max-width:768px){
  height:fit-content;
  padding:1rem .5rem;
}

`
const FooterInner = styled.div`
max-width:80%;
margin:auto;
height:100%;
// border:1px solid red;
background:none;
display:flex;
justify-content:space-between;
align-items:center;
@media screen and (max-width:768px){
 max-width:100%;  
 flex-flow:column;
 justify-content:center;
 gap:1rem;
}
`
const Aside = styled.div`
background:none;
display:flex;
// border:1px solid red;
color:#000;
gap:.5rem;
& > div{
  height:2rem;
  width:2rem;
  border-radius:1rem;
  background:${colors.white};
  display:flex;
  align-items:center;
  justify-content:center;
  &:hover{
    transition:all 0.2s ease-in;
    box-shadow:0px 0px 4px ${colors.general_bg};
    cursor:pointer;
    // margin-bottom:.5rem;
  }
  
}

`