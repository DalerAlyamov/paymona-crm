import React, { useState } from 'react'
import styles from '../scss/organisms/Sidebar.module.scss'
import BlocksForSideBar from '../molecules/BlocksForSideBar'
import SideBarBrand from '../molecules/SideBarBrand'
import Icons from '../atoms/Icons'
import { Menu, PersonOutline, WorkOutline, PeopleOutline, InfoOutline } from '../icons'
import classNames from 'classnames'


const SideBar = () => {

  const [opAnClos, setOpAnClost] = useState(false)

  return (
    <div className={classNames(styles.root, opAnClos )}>
      <SideBarBrand 
        text='Paymona'
      />
      <BlocksForSideBar
        content=
          {<Icons
            icon={ <PersonOutline size={28}/> }
            clasName={styles.items}
          />
        }
        text='Сотрудники'
      />
      <BlocksForSideBar
        content={
          <Icons
            icon={ <WorkOutline size={28}/> }
            clasName={styles.items}
          />
        }
        text='Услуги'
      />
      <BlocksForSideBar
        content={
          <Icons
            icon={ <PeopleOutline size={28}/> }
            clasName={styles.items}
          />
        }
        text='Клиенты'

      />
      <BlocksForSideBar
        content={
          <Icons
            icon={ <InfoOutline size={28}/> }
            clasName={styles.items}
          />
        }
        text='Отзывы'
      />

      <button
       onClick={()=>{
         setOpAnClost(!opAnClos)
       }}
       className={styles.menu}>
        <Icons
          icon={ <Menu size={28}/> }
          clasName={styles.items} 
        />
      </button>

    </div>
  )
}

export default SideBar
