import React from 'react'
import styles from '../scss/molecules/BlocksForSideBar.module.scss'
import Icons from '../atoms/Icons'
import { PersonOutline } from '../icons'
const BlocksForSideBar = ({
  text,
  content
}) => {
  return (
    <div className={styles.root}>

      {content}

      <span className={styles.text}>
        {text}
      </span>
    </div>
  )
}

export default BlocksForSideBar
