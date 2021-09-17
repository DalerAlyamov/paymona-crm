import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/TableTools.module.scss'

const TableTools = ({
  className='',
  hasFilter=false,
  children=<></>
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      
    </div>
  )
}

export default TableTools
