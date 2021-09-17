import React from 'react'
import styles from '../scss/molecules/BlocksForSideBar.module.scss'
import Icons from '../atoms/Icons'
import { logo } from '../icons'
const BlocksForSideBar = () => {
  return (
    <div className={styles.root}>
        <Icons
           
         icon={logo}

        />
    </div>
  )
}

export default BlocksForSideBar
