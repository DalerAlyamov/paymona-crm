import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/Wrap.module.scss'

const Wrap = ({
  className='',
  children='',
  flex=false,
  spaceBetween=false,
  spaceAround=false,
  justifyEnd=false,
  alignCenter=false,
  alignEnd=false,
  column=false
}) => {
  return (
    <div 
      className={classNames(
        className, 
        styles.root,
        flex && styles.flex,
        spaceBetween && styles.spaceBetween,
        spaceAround && styles.spaceAround,
        justifyEnd && styles.justifyEnd,
        alignCenter && styles.alignCenter,
        alignEnd && styles.alignEnd,
        column && styles.column
      )}
    >
      {children}
    </div>
  )
}

export default Wrap
