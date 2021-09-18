import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const Dot = ({ 
  className,
  size=24
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      d="M18 12C18 8.68629 15.3137 6 12 6C10.4189 6 9 6.59352 7.90888 7.61103C6.74155 8.69962 6 10.2674 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12Z" 
      fill="currentColor"
    />
  </Svg>
)

export default Dot