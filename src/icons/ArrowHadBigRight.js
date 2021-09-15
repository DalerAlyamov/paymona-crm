import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

export const ArrowHadBigRight = ({ 
  className,
  size=24
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M5.87994 4.12L13.7599 12L5.87994 19.88L7.99994 22L17.9999 12L7.99994 2L5.87994 4.12Z' 
    />
  </Svg>
)