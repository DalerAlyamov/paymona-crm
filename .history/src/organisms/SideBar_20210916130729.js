import React, { useState } from 'react'
import styles from '../scss/organisms/Sidebar.module.scss'
import BlocksForSideBar from '../molecules/BlocksForSideBar'
import Icons from '../atoms/Icons'
import { Logo } from '../icons'

const SideBar = ({
  clasName,
  rotate,
  active,

}) => {

  return (
    <div className={styles.root}>
      <BlocksForSideBar 
      text='Paymona'
      content={
        <Icons
        icon={<Logo size={32}/>}
        clasName={styles.titleSideBar}
        rotate={false}
        active={false}
       />
      }/>
    </div>
  )
}

export default SideBar
