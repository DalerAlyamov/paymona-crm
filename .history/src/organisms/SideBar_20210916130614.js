import React, { useState } from 'react'
import styles from '../scss/organisms/Sidebar.module.scss'
import BlocksForSideBar from '../molecules/BlocksForSideBar'

const SideBar = () => {

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
      <span className={styles.text}>
       {text}
      </span>
      }/>
    </div>
  )
}

export default SideBar
