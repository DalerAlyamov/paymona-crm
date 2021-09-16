import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const ArrowHadSmallRight = ({ 
  className,
  size=24
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M8.295 16.8849L12.875 12.2949L8.295 7.70492L9.705 6.29492L15.705 12.2949L9.705 18.2949L8.295 16.8849Z' 
    />
  </Svg>
)

export default ArrowHadSmallRight