import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/TopbarUserPanel.module.scss'
import { TopbarUserPanelLabel } from '../atoms'
import { TopbarUserPanelMenu } from '.'

const TopbarUserPanel = ({
  className=''
}) => {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleWindowClick = e => {
      if (!e.target.closest('.'+styles.root))
        setOpen(false)
    }
    window.addEventListener('click', handleWindowClick)
    return () => window.removeEventListener('click', handleWindowClick)
  }, [])

  return (
    <div className={classNames(className, styles.root)}>
      
      <TopbarUserPanelLabel onClick={() => setOpen(!open)} />

      {open &&
        <TopbarUserPanelMenu onClose={() => setOpen(false)} open />
      }

    </div>
  )
}

export default TopbarUserPanel
