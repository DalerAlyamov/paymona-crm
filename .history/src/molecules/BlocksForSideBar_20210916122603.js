import React from 'react'
import styles from '../scss/molecules/BlocksForSideBar.module.scss'
import Icons from '../atoms/Icons'
import { logo } from '../icons'
const BlocksForSideBar = ({
  text
}) => {
  return (
    <div className={styles.root}>
        <Icons
         icon={logo size={32}/>}
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
