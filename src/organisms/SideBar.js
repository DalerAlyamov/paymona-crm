import classNames from 'classnames'
import React from 'react'
import styles from '../scss/organisms/SideBar.module.scss'
import { SidebarBrand } from '../atoms'

const SideBar = ({
  className
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      <SidebarBrand />
    </div>
  )
}

export default SideBar
