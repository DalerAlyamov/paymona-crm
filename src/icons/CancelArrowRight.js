import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const CancelArrowRight = ({ 
  className,
  size=24
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d="M13 9L11.58 10.42L15.17 14H6V4H4V16H15.17L11.58 19.58L13 21L19 15L13 9Z" 
    />
  </Svg>
)

export default CancelArrowRight