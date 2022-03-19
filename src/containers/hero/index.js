import React from 'react'
import ConnectBtn from '../../components/ConnectBtn'
import { Main, HeroWrapper, AsideLeft, AsideRight } from './style'
const Hero
  = () => {
    return (
      <Main >
        <HeroWrapper>
          <AsideLeft>
            <h1>
              Hello 👋
            </h1>
            <h3>I’m Prince Chijioke, a UX designer based in Enugu, Nigeria</h3>
            <p>
              I build easy-to-use and profitable digital products while solving user’s needs .
              When I’m not designing User Interfaces, I build websites using WordPress and also design visually appealing graphics using Adobe Photoshop.
            </p>
            <div>
              <ConnectBtn Bgcolor="#277EC3" text={'Download resume'} path='/resume' />
              <ConnectBtn text={'contact me'} />
            </div>
          </AsideLeft>
          <AsideRight>
            <img src='/images/prince.png' alt='prince image' />
          </AsideRight>
        </HeroWrapper>
      </Main>

    )
  }

export default Hero
