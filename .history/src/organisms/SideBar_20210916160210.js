import React, { useState } from 'react'
import styles from '../scss/organisms/Sidebar.module.scss'
import BlocksForSideBar from '../molecules/BlocksForSideBar'
import SideBarBrand from '../molecules/SideBarBrand'
import Icons from '../atoms/Icons'
import { PersonOutline } from '../icons'


const SideBar = () => {

  return (
    <div className={styles.root}>
      <SideBarBrand 
        text='Paymona'
      />
      <BlocksForSideBar
        Content={<Icons
          icon={ <PersonOutline size={28}/> }
          clas
        />}
      />

    </div>
  )
}

export default SideBar
