import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/TableRow.module.scss'
import { TableRowMenu } from '../atoms'

const TableRow = ({
  id=0,
  honest=false,
  className='',
  template=['1fr'],
  menu=<></>,
  children=<></>
}) => {

  const gridTemplate = [...template, '48px']

  return (
    <div 
      className={classNames(
        className, 
        styles.root,
        honest && styles.honest
      )}
      style={{ gridTemplateColumns: gridTemplate.join(' ') }}
    >
      {children}
      <TableRowMenu id={id}>
        {menu}
      </TableRowMenu>
    </div>
  )
}

export default TableRow
