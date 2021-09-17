import React, { useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/SideBar.module.scss'
import { SidebarBrand, SidebarFooter } from '../atoms'
import { SidebarButtonGroup } from '../molecules'

const SideBar = ({
  className=''
}) => {

  const [close, setClose] = useState(false)

  return (
    <div className={classNames(className, styles.root, close && styles.close)}>
      
      <SidebarBrand removeText={close} />

      <SidebarButtonGroup removeText={close} />

      <SidebarFooter onClick={() => setClose(!close)} />

    </div>
  )
}

export default SideBar
