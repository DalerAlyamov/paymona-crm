import React, { useState } from 'react'
import styles from '../scss/organisms/Sidebar.module.scss'
import { Menu } from '../icons';

const SideBar = () => {

  const [activeSideBar, setActiveSideBar] = useState(false);

  return (
    <div className={styles.root}>
        <Me
    </div>
  )
}

export default SideBar
