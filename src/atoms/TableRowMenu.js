import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { More } from '../icons'
import styles from '../scss/atoms/TableRowMenu.module.scss'

const TableRowMenu = ({
  id=0,
  className='',
  children=<></>
}) => {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleWindowClick = e => {
      if (!e.target.closest('#TableRowMenu'+id))
        setOpen(false)
    }
    window.addEventListener('click', handleWindowClick)
    return () => window.removeEventListener('click', handleWindowClick)
  }, [id])

  return (
    <div className={classNames(className, styles.root)} id={'TableRowMenu'+id}>
      
      <button onClick={() => setOpen(!open)} className={styles.label}>
        <More />
      </button>

      {open &&
        <div className={styles.menu}>
          {children}
        </div>
      }

    </div>
  )
}

export default TableRowMenu
