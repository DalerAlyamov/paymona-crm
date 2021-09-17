import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/SidebarButtonGroup.module.scss'
import { SidebarButton } from '../atoms'
import { PersonOutline, WorkOutline, PeopleOutline, InfoOutline } from '../icons'
import { Link } from 'react-router-dom' 

const SidebarButtonGroup = ({
  className='',
  removeText=false
}) => {
  return (
    <div className={classNames(className, styles.root)}>

      <Link to='/employee'>
        <SidebarButton beforeIcon={<PersonOutline />}>
          {!removeText && 'Сотрудники'}
        </SidebarButton>
      </Link>

      <Link to='/services'>
        <SidebarButton beforeIcon={<WorkOutline />}>
          {!removeText && 'Услуги'}
        </SidebarButton>
      </Link>

      <Link to='/clients'>
        <SidebarButton beforeIcon={<PeopleOutline />}>
          {!removeText && 'Клиенты'}
        </SidebarButton>
      </Link>

      <Link to='/reviews'>
        <SidebarButton beforeIcon={<InfoOutline />}>
          {!removeText && 'Отзывы'}
        </SidebarButton>
      </Link>

    </div>
  )
}

export default SidebarButtonGroup
