import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/Wrap.module.scss'

const Wrap = ({
  className='',
  children=<></>,
  flex=false,
  spaceBetween=false,
  spaceAround=false,
  justifyEnd=false,
  justifyCenter=false,
  alignCenter=false,
  alignEnd=false,
  column=false,
  gap=0,
  autoWidth=true
}) => {
  return (
    <div 
      style={{ gap: gap+'px' }}
      className={classNames(
        className, 
        styles.root,
        flex && styles.flex,
        spaceBetween && styles.spaceBetween,
        spaceAround && styles.spaceAround,
        justifyEnd && styles.justifyEnd,
        justifyCenter && styles.justifyCenter,
        alignCenter && styles.alignCenter,
        alignEnd && styles.alignEnd,
        column && styles.column,
        autoWidth && styles.autoWidth,
      )}
    >
      {children}
    </div>
  )
}

export default Wrap
