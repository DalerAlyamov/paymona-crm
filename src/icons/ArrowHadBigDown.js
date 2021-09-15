import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

export const ArrowHadBigDown = ({ 
  className,
  size=24
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M19.8199 5.93994L11.9399 13.8199L4.05988 5.93994L1.93988 8.05994L11.9399 18.0599L21.9399 8.05994L19.8199 5.93994Z' 
    />
  </Svg>
)