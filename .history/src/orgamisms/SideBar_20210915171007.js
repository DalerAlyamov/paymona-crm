import React, { useState } from 'react'
import styles from '../scss/organisms/Sidebar.module.scss'
import { Menu } from '../icons/Menu';
import Icon from '../atoms/Icons'
const SideBar = () => {

  const [activeSideBar, setActiveSideBar] = useState(false);

  return (
    <div className={styles.root}>
      <Icon
       icon={<Menu/>}
       className={styles.icon}
       size={30}
       rotate={90deg}
       active={true}
      />
    </div>
  )
}

export default SideBar
