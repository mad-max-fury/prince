import React from 'react'
import About from '../../containers/About'
import Footer from '../../containers/footer'
import TopNavBar from '../../containers/navBar'
import { AboutPageWrapper } from './style'

const AboutPage = () => {
  return (

    <AboutPageWrapper style={{ height: '80vh' }}>
      <About />
    </AboutPageWrapper>

  )
}

export default AboutPage