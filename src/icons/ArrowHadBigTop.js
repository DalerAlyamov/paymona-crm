import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const ArrowHadBigTop = ({ 
  className,
  size=24
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M4.05994 18.0601L11.9399 10.1801L19.8199 18.0601L21.9399 15.9401L11.9399 5.94006L1.93994 15.9401L4.05994 18.0601Z' 
    />
  </Svg>
)

export default ArrowHadBigTop