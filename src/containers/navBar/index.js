import React, { useState } from 'react'
import { NavBar, Logo, NavItems, Li, Hamburger, Close, Open, NavBarWrapper } from './style'
import { Link } from 'react-router-dom'
import ConnectBtn from '../../components/ConnectBtn/index'
const TopNavBar = () => {

  const [toggleNav, setToggleNav] = useState(false)
  const handleClick = (e) => {
    const { target } = e
    const ul = document.getElementById('ul')
    const arr = [...ul.children]
    arr.forEach(a => {
      a.children[0].classList.remove('active')
    })
    target.classList.add('active')
  }

  return (
    <NavBarWrapper>
      <NavBar >
        <Link to="/" onClick={handleClick}>
          <Logo>
            UPC<div></div>
          </Logo>
        </Link>
        <Hamburger>
          <Close active={toggleNav} onClick={() => setToggleNav(false)}>X</Close>
          <Open active={toggleNav} onClick={() => setToggleNav(true)}>
            <span></span>
            <span></span>
            <span></span>

          </Open>
        </Hamburger>
        <NavItems active={toggleNav} id='ul' >
          <Li>
            <Close active={toggleNav} onClick={() => setToggleNav(false)}>X</Close>
          </Li>
          <Li >
            <Link to="/" onClick={() => setToggleNav(false)}>Home</Link>
          </Li>
          <Li className='' onClick={handleClick}>
            <Link to="/about" className='' onClick={() => setToggleNav(false)}>About me</Link>
          </Li>
          <Li className='' onClick={handleClick}>
            <a
              href='#projects' className='' onClick={() => setToggleNav(false)}>My Projects</a>
          </Li>
          <Li className='' onClick={handleClick} >
            <a href={'#Myblog'} className='' onClick={() => setToggleNav(false)}>My Blog</a>
          </Li>
          <Li className='' onClick={() => setToggleNav(false)}><ConnectBtn text={'Connect me'} /></Li>

        </NavItems>

      </NavBar>
    </NavBarWrapper>
  )
}

export default TopNavBar
