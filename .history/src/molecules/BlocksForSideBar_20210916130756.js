import React from 'react'
import styles from '../scss/molecules/BlocksForSideBar.module.scss'
import Icons from '../atoms/Icons'
import { Logo } from '../icons'
const BlocksForSideBar = ({
  text
}) => {
  return (
    <div className={styles.root}>
       <span className={styles.text}>
        {text}
       </span>
    </div>
  )
}

export default BlocksForSideBar
