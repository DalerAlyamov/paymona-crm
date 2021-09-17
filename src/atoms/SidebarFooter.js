import classNames from 'classnames'
import React from 'react'
import styles from '../scss/atoms/SidebarFooter.module.scss'
import { Menu } from '../icons'
import { SidebarButton } from '.'

const SidebarFooter = ({
  className,
  onClick
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      <SidebarButton onClick={onClick} beforeIcon={<Menu />}>
      </SidebarButton>
    </div>
  )
}

export default SidebarFooter
