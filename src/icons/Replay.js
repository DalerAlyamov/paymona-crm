import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const Replay = ({ 
  className,
  size=24
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d="M16.1272 5.72968L18.1484 2.33984L19.9979 9.02354L13.0954 10.8144L15.1166 7.4246C12.2197 5.80508 8.5061 6.76858 6.83356 9.57367C5.16102 12.3788 6.15606 15.9746 9.05299 17.5941C11.9499 19.2136 15.6635 18.2501 17.336 15.445L19.0864 16.4236C16.853 20.1694 11.9108 21.4516 8.04239 19.289C4.17398 17.1264 2.84972 12.3409 5.08315 8.59511C7.31658 4.84934 12.2588 3.56706 16.1272 5.72968Z"
    />
  </Svg>
)

export default Replay