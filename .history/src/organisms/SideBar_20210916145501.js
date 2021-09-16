import React, { useState } from 'react'
import styles from '../scss/organisms/Sidebar.module.scss'
import BlocksForSideBar from '../molecules/BlocksForSideBar'
import Icons from '../atoms/Icons'
import { Logo } from '../icons'

const SideBar = () => {

  return (
    <div className={styles.root}>
      <BlocksForSideBar 
        text='Paymona'
       />
    </div>
  )
}

export default SideBar
