import React, { useState } from 'react'
import styles from '../scss/organisms/Sidebar.module.scss'
import { Menu } from '../icons/Menu';
import Icon from '../atoms/Icons'
const SideBar = () => {

  return (
    <div className={styles.root}>
      <Icon
       icon={<Menu size={24} />}
       clasName={styles.icon}
       rotate
       active  
      />
    </div>
  )
}

export default SideBar
