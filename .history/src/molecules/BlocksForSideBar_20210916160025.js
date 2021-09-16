import React from 'react'
import styles from '../scss/molecules/BlocksForSideBar.module.scss'
import Icons from '../atoms/Icons'
import { PersonOutline } from '../icons'
const BlocksForSideBar = ({
  text
}) => {
  return (
    <div className={styles.root}>
      <Icons
        icon={<PersonOutline
          size={32} />}
      />
    </div>
  )
}

export default BlocksForSideBar
