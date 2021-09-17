import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/TableHeaders.module.scss'

const TableHeaders = ({
  className='',
  template=['1fr'],
  children=<></>
}) => {

  const gridTemplate = [...template, '48px']

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
