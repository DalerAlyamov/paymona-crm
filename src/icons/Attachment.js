import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

export const Attachment = ({ 
  className,
  size=24
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d="M4 12.5C4 9.46 6.46 7 9.5 7H20C22.21 7 24 8.79 24 11C24 13.21 22.21 15 20 15H11.5C10.12 15 9 13.88 9 12.5C9 11.12 10.12 10 11.5 10H19V12H11.41C10.86 12 10.86 13 11.41 13H20C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9H9.5C7.57 9 6 10.57 6 12.5C6 14.43 7.57 16 9.5 16H19V18H9.5C6.46 18 4 15.54 4 12.5Z" 
    />
  </Svg>
)