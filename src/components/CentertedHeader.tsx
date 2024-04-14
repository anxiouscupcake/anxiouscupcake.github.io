import React from 'react'
import '../styles/CenteredHeader.css'

type CenteredHeaderProps = {
  text: string
}

function CenteredHeader({ text = 'Header text' }: CenteredHeaderProps) {
  return (
    <div className='centeredHeader'>
      <h1>{text}</h1>
    </div>
  )
}

export default CenteredHeader
