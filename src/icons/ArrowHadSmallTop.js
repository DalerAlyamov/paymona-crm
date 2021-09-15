import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

export const ArrowHadSmallTop = ({ 
  className,
  size=24
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M16.59 16L12 11.42L7.41 16L6 14.59L12 8.59L18 14.59L16.59 16Z' 
    />
  </Svg>
)