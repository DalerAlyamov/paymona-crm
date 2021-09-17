import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/TableColumn.module.scss'

const TableColumn = ({
  className='',
  type='default',
  children=<></>
}) => {
  return (
    <div 
      className={classNames(
        className, 
        styles.root,
        styles[type]
      )}
    >
      {children}
    </div>
  )
}

export default TableColumn
