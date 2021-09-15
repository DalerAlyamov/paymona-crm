import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const Edit = ({ 
  className,
  size=24
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M5 16.0837V19H7.91626L16.5173 10.399L13.601 7.48271L5 16.0837ZM18.7725 8.14373C19.0758 7.84044 19.0758 7.35051 18.7725 7.04722L16.9528 5.22747C16.6495 4.92418 16.1596 4.92418 15.8563 5.22747L14.4331 6.6506L17.3494 9.56687L18.7725 8.14373Z' 
    />
  </Svg>
)

export default Edit