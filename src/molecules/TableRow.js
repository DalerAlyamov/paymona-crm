import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/TableRow.module.scss'
import { TableRowMenu } from '../atoms'

const TableRow = ({
  id=0,
  honest=false,
  className='',
  hasMenu=false,
  template=['1fr'],
  menu=<></>,
  children=<></>
}) => {

  const gridTemplate = hasMenu ? [...template, '48px'] : template

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
      {hasMenu &&
        <TableRowMenu id={id}>
          {menu}
        </TableRowMenu>
      }
    </div>
  )
}

export default TableRow
