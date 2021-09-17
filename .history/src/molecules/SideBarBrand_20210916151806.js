import React from 'react'
import Icons from '../atoms/Icons'
import { Logo } from '../icons'
import styles from 
const SideBarBrand = ({
  text
}) => {
  return (
    <div className={styles.wrap}>
      <Icons
        icon={<Logo size={32}/>}
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

export default SideBarBrand
