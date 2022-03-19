import React from 'react'
import AboutPage from '../../containers/About'
import ContactMe from '../../containers/contactme'
import Footer from '../../containers/footer'
import Hero from '../../containers/hero'
import TopNavBar from '../../containers/navBar'
import ProductSection from '../../containers/productslider'

import { LandingPageWrapper } from './style'

const LandingPage = () => {
  return (
    <>
      <LandingPageWrapper >
        <Hero />
      </LandingPageWrapper>
      <ProductSection />
      <ContactMe />
    </>
  )
}

export default LandingPage