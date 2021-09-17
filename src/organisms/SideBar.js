import React from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/SideBar.module.scss'
import { SidebarBrand } from '../atoms'
import { SidebarButtonGroup } from '../molecules'

const SideBar = ({
  className=''
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      
      <SidebarBrand />

      <SidebarButtonGroup />

    </div>
  )
}

export default SideBar
