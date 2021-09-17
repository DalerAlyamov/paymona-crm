import React, { useState } from 'react'
import styles from '../scss/organisms/Sidebar.module.scss'
import { Menu } from '../icons/Menu';
import Icon from '../atoms/Icons'
const SideBar = () => {

  const [activeSideBar, setActiveSideBar] = useState(false);

  return (
    <div className={styles.root}>
      <Icon
       icon={<Menu
        size={40} 
       />}
       className={styles.icon}
       rotate={90deg}
       active={true}
      />
    </div>
  )
}

export default SideBar
