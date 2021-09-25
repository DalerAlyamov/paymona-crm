import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/Wrap.module.scss'

const Wrap = ({
  className='',
  children='',
  flex=false,
  autoWidth=true,
  spaceBetween=false,
  spaceAround=false,
  justifyEnd=false,
  justifyCenter=false,
  alignCenter=false,
  alignEnd=false,
  column=false,
  wrap=false,
  nowrap=false,
  grow=0,
  gap=0,
  onClick=()=>{}
}) => {

  let style = {
    gap: gap+'px'
  }

  if (grow !== 0)
    style.flexGrow = grow

  return (
    <div 
      onClick={onClick}
      style={style}
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
        wrap && styles.wrap,
        nowrap && styles.nowrap,
        autoWidth && styles.autoWidth
      )}
    >
      {children}
    </div>
  )
}

export default Wrap
