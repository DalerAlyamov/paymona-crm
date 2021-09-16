import React from 'react'
import styles from '../scss/molecules/BlocksForSideBar.module.scss'
import Icons from '../atoms/Icons'
import { PersonOutline } from '../icons'
const BlocksForSideBar = ({
  text
}) => {
  return (
    <div className={styles.root}>
      <span>
        {tex}
      </span>
    </div>
  )
}

export default BlocksForSideBar
