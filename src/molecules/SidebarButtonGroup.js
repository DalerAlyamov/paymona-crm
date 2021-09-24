import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/SidebarButtonGroup.module.scss'
import { SidebarButton } from '../atoms'
import { PersonOutline, WorkOutline, PeopleOutline, InfoOutline } from '../icons'
import { Link, useLocation } from 'react-router-dom' 

const SidebarButtonGroup = ({
  className='',
  removeText=false
}) => {

  const location = useLocation()

  return (
    <div className={classNames(className, styles.root)}>

      <Link to='/employees'>
        <SidebarButton 
          beforeIcon={<PersonOutline />} 
          active={location.pathname === '/employees'}
        >
          {!removeText && 'Сотрудники'}
        </SidebarButton>
      </Link>

      <Link to='/services'>
        <SidebarButton 
          beforeIcon={<WorkOutline />} 
          active={location.pathname === '/services'}
        >
          {!removeText && 'Продукты'}
        </SidebarButton>
      </Link>

      <Link to='/clients'>
        <SidebarButton 
          beforeIcon={<PeopleOutline />} 
          active={location.pathname.indexOf('/clients') !== -1}
        >
          {!removeText && 'Клиенты'}
        </SidebarButton>
      </Link>

      <Link to='/feedbacks'>
        <SidebarButton 
          beforeIcon={<InfoOutline />} 
          active={location.pathname === '/feedbacks'}
        >
          {!removeText && 'Отзывы'}
        </SidebarButton>
      </Link>

    </div>
  )
}

export default SidebarButtonGroup
