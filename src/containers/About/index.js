import React from 'react'
import ConnectBtn from '../../components/ConnectBtn'
import { AboutPageWrapper, AboutAsideLeft, AboutAsideRight } from './style'
const About = () => {
  return (
    <AboutPageWrapper>
      <div>
        <AboutAsideLeft >
          <img src='/images/imageprince.png' alt='prince' />
        </AboutAsideLeft>
        <AboutAsideRight>
          <h3>About me</h3>
          <p>My name is Prince Chijioke Ugbuta from the Eastern part of Nigeria and I'm passionate about building easy-to-use and profitable digital products while solving user’s needs.
          </p >
          <p>
            I’m a Google Certified UI/UX designer with an experience in working effectively with teams through my internship at Genesys Tech Hub, I have also learnt a lot of processes, concepts and theories of UI/UX through attending design bootcamps, reading blogs and close mentorship from industry experts.
          </p>
          <p>
            With a problem-solving mindset, I help my clients to create designs that are aesthetically pleasing, technically refined and easy to use.
            I enjoy empathizing with people and crafting digital experiences, that empower users and boost business growth. </p>
          <p>
            I love to explore new opportunities in tech such as opportunities in Web3 technology.
            Wish to know more?
          </p>
          <ConnectBtn text={'Get In Touch'} />

        </AboutAsideRight>
      </div>
    </AboutPageWrapper>
  )
}

export default About