import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

export const LogoColored = ({ 
  className,
  size=24
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d="M23.5555 11.9119V16.6433C23.5559 16.8543 23.5001 17.0618 23.3933 17.2464C23.2866 17.4309 23.1324 17.5864 22.9453 17.6981L12.6818 23.8128C12.4756 23.9351 12.2377 24 11.9951 24C11.7524 24 11.5146 23.9351 11.3083 23.8128L1.05659 17.6943C0.869289 17.5827 0.714797 17.4273 0.607692 17.2428C0.500586 17.0582 0.444398 16.8506 0.444428 16.6396V11.9119C0.444396 11.6902 0.506346 11.4726 0.623852 11.2816C0.741358 11.0906 0.910144 10.9331 1.11271 10.8255C1.31527 10.7179 1.54424 10.6641 1.77587 10.6696C2.0075 10.6752 2.23336 10.7399 2.43003 10.8571L11.3083 16.1535C11.5146 16.2758 11.7524 16.3407 11.9951 16.3407C12.2377 16.3407 12.4756 16.2758 12.6818 16.1535L21.5621 10.8571C21.7587 10.7373 21.9855 10.6704 22.2186 10.6636C22.4517 10.6567 22.6823 10.71 22.8864 10.818C23.0904 10.9259 23.2602 11.0845 23.378 11.277C23.4957 11.4695 23.5571 11.6888 23.5555 11.9119Z" 
    />
    <path 
      fill='currentColor'
      d="M11.3066 13.2688L2.19288 7.81102C2.00725 7.69908 1.8543 7.54397 1.7483 7.36018C1.6423 7.17639 1.5867 6.96991 1.5867 6.76C1.5867 6.5501 1.6423 6.34361 1.7483 6.15982C1.8543 5.97603 2.00725 5.82093 2.19288 5.70898L11.3027 0.193005C11.51 0.0669478 11.7506 0 11.9963 0C12.242 0 12.4826 0.0669478 12.6899 0.193005L21.8056 5.70898C21.9912 5.82093 22.1442 5.97603 22.2502 6.15982C22.3562 6.34361 22.4118 6.5501 22.4118 6.76C22.4118 6.96991 22.3562 7.17639 22.2502 7.36018C22.1442 7.54397 21.9912 7.69908 21.8056 7.81102L12.684 13.2688C12.4774 13.3921 12.2388 13.4575 11.9953 13.4575C11.7518 13.4575 11.5132 13.3921 11.3066 13.2688Z" 
    />
  </Svg>
)