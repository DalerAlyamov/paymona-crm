import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/SidebarButtonGroup.module.scss'
import { SidebarButton } from '../atoms'
import { PersonOutline, WorkOutline, PeopleOutline, InfoOutline } from '../icons' 

const SidebarButtonGroup = ({
  className='',
  removeText=false
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      <SidebarButton beforeIcon={<PersonOutline />}>
        {!removeText && 'Сотрудники'}
      </SidebarButton>
      <SidebarButton beforeIcon={<WorkOutline />}>
        {!removeText && 'Услуги'}
      </SidebarButton>
      <SidebarButton beforeIcon={<PeopleOutline />}>
        {!removeText && 'Клиенты'}
      </SidebarButton>
      <SidebarButton beforeIcon={<InfoOutline />}>
        {!removeText && 'Сотрудники'}
      </SidebarButton>
    </div>
  )
}

export default SidebarButtonGroup
