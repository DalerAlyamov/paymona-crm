import React, { useState } from 'react'
import styles from '../scss/organisms/Sidebar.module.scss'
import BlocksForSideBar from '../molecules/BlocksForSideBar'
import Branding from '../molecules/Branding'
import Icons from '../atoms/Icons'
import { Logo } from '../icons'

const SideBar = () => {

  return (
    <div className={styles.root}>
      <Brand 
        text='Paymona'
      />
    </div>
  )
}

export default SideBar
