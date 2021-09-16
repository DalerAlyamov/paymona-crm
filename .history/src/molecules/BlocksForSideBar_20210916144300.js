import React from 'react'
import styles from '../scss/molecules/BlocksForSideBar.module.scss'
import Icons from '../atoms/Icons'
import { Logo } from '../icons'
const BlocksForSideBar = ({
  text
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.}>
        <Icons
         icon={<Logo size={32}/>}
         clasName={styles.titleSideBar}
         rotate={false}
         active={false}
        />
       <span className={styles.text}>
        {text}
       </span>
      </div>
      

    </div>
  )
}

export default BlocksForSideBar
