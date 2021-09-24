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
  children='',
  clickable=false
}) => {

  const gridTemplate = hasMenu && !clickable ? [...template, '48px'] : template

  if (!clickable)
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
  else 
    return (
      <div className={styles.wrap}>
        <div 
          className={classNames(
            className, 
            styles.root,
            honest && styles.honest
          )}
          style={{ gridTemplateColumns: gridTemplate.join(' ') }}
        >
          {children}
        </div>
        {hasMenu &&
          <div className={styles.menu_wrap}>
            <TableRowMenu id={id}>
              {menu}
            </TableRowMenu>
          </div>
        }
      </div>
    )
}

export default TableRow
