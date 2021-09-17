import React from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/Topbar.module.scss'
import { TopbarUserPanel } from '../molecules'

const Topbar = ({
  className='',
  title=''
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      <span className={styles.title}>
        {title}
      </span>
      <TopbarUserPanel />
    </div>
  )
}

export default Topbar
