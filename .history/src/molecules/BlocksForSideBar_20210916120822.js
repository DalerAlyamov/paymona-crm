import React from 'react'
import styles from '../scss/molecules/BlocksForSideBar.module.scss'
import Icons from '../atoms/Icons'
import { logo } from '../icons'
const BlocksForSideBar = () => {
  return (
    <div className={styles.root}>
        <Icons

         icon={<logo size={40}/>}

        />
    </div>
  )
}

export default BlocksForSideBar
