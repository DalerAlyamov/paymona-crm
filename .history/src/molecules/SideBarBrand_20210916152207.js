import React from 'react'
import Icons from '../atoms/Icons'
import { Logo } from '../icons'
import styles from '../scss/molecules/SideBarBrand.module.scss'
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
      <span className={styles.}>
        {text}
      </span>
    </div>
  )
}

export default SideBarBrand
