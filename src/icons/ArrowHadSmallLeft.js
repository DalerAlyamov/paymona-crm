import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const ArrowHadSmallLeft = ({ 
  className,
  size=24
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M15.705 7.70504L11.125 12.295L15.705 16.885L14.295 18.295L8.295 12.295L14.295 6.29504L15.705 7.70504Z' 
    />
  </Svg>
)

export default ArrowHadSmallLeft