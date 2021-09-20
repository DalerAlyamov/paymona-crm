import React from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/Table.module.scss'

const Table = ({
  className='',
  children=''
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      {children}
    </div>
  )
}

export default Table
