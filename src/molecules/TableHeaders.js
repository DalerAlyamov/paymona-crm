import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/TableHeaders.module.scss'

const TableHeaders = ({
  className='',
  hasMenu=false,
  template=['1fr'],
  children=<></>
}) => {

  const gridTemplate = hasMenu ? [...template, '48px'] : template

  return (
    <div
      style={{ gridTemplateColumns: gridTemplate.join(' ') }} 
      className={classNames(className, styles.root)}
    >
      {children}
    </div>
  )
}

export default TableHeaders
