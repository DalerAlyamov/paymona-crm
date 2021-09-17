import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

export const CheckCircleOutline = ({ 
  className,
  size=24
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d="M4.5 12V12.5H5H8.5V19.5H6zzC4.61614 19.5 3.5 18.3839 3.5 17V10C3.5 5.30614 7.30614 1.5 12 1.5C16.6939 1.5 20.5 5.30614 20.5 10V20C20.5 21.3839 19.3839 22.5 18 22.5H12.5V21.5H19H19.5V21V20V19.5H19H15.5V12.5H19H19.5V12V10C19.5 5.85386 16.1461 2.5 12 2.5C7.85386 2.5 4.5 5.85386 4.5 10V12Z"
    />
  </Svg>
)