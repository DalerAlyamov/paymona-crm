import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const ArrowHadBigLeft = ({ 
  className,
  size=24
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M17.9999 19.88L10.1199 12L17.9999 4.12L15.8799 2L5.87988 12L15.8799 22L17.9999 19.88Z' 
    />
  </Svg>
)

export default ArrowHadBigLeft