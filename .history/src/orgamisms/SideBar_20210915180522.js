import React, { useState } from 'react'
import styles from '../scss/organisms/Sidebar.module.scss'
import { Menu } from '../icons/Menu';
import Icon from '../atoms/Icons'
const SideBar = () => {

  return (
    <div className={styles.root}>
      <Icon
       icon={<Menu size={40} />}
       clasName={styles.icon}
       active={false}
       rotate={true}  
      />
    </div>
  )
}

export default SideBar
