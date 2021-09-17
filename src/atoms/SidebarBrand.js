import classNames from 'classnames'
import React from 'react'
import styles from '../scss/atoms/SidebarBrand.module.scss'
import { Logo } from '../icons'

const SidebarBrand = ({
  className='',
  removeText=false
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      <div className={styles.logo}>
        <Logo size={28} />
      </div>
      {!removeText &&
        'Paymona'
      }
    </div>
  )
}

export default SidebarBrand
