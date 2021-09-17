import React, { useState } from 'react'
import styles from '../scss/organisms/Sidebar.module.scss'
import BlocksForSideBar from '../molecules/BlocksForSideBar'
const SideBar = () => {

  return (
    <div className={styles.root}>
      <BlocksForSideBar text={}/>
    </div>
  )
}

export default SideBar
