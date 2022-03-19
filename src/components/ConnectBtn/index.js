import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../colors'

const ConnectBtn = ({ text, Bgcolor, path }) => {
  const navigate = useNavigate()
  const handleClick = () => navigate(path)
  return (
    <Btn onClick={handleClick} style={{ background: `${Bgcolor ? Bgcolor : null}`, border: `${Bgcolor ? Bgcolor : null}`, color: `${Bgcolor ? colors.white : null}` }}>{text}</Btn>
  )
}

export default ConnectBtn

const Btn = styled.button`
 background:none;
 border:1px solid #fff;
  padding:1rem 1.8rem;
  border-radius:10px;
  font-size:16px;
  font-weight:500;
  color:${colors.white};
  text-transform:capitalize;
  &:hover{
    transition:all 0.2s ease-in-out;
    color:${colors.secondary_color};
    border:1px solid ${colors.secondary_color};
    padding:.9rem 1.7rem;
    cursor:pointer;
  }
    @media screen and (max-width:768px){
    font-size:13px
  }
`