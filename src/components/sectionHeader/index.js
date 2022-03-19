import React from 'react'
import { SecHead } from './style'
const SecHeader = ({ heading, paragraph }) => {
  return (
    <SecHead>
      <h3>{heading}</h3>
      <p>{paragraph}.</p >
    </SecHead>
  )
}

export default SecHeader