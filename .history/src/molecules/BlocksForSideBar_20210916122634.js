import React from 'react'
import styles from '../scss/molecules/BlocksForSideBar.module.scss'
import Icons from '../atoms/Icons'
import {  } from '../icons'
const BlocksForSideBar = ({
  text
}) => {
  return (
    <div className={styles.root}>
        <Icons
         icon={logo}
         clasName={styles.titleSideBar}
         rotate={false}
         active={false}
        />
       <span>
        {text}
       </span>
    </div>
  )
}

export default BlocksForSideBar
