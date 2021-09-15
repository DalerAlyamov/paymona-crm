import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

export const ArrowLeft = ({ 
  className,
  size=24
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M21 11L6.83 11L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13L21 13V11Z' 
    />
  </Svg>
)