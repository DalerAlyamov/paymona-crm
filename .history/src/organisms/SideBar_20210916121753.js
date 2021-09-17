import React, { useState } from 'react'
import styles from '../scss/organisms/Sidebar.module.scss'
import BlocksForSideBar from '../molecules/BlocksForSideBar'
const SideBar = () => {

  return (
    <div className={styles.root}>
      <BlocksForSideBar/>
    </div>
  )
}

export default SideBar
