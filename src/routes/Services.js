import React, { useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/routes/Services.module.scss'
import { Service, Topbar } from '../organisms'
import { TableTools } from '../molecules'
import { Button } from '../atoms'
import { openPopup } from '../redux/actions/popupActions'
import { useDispatch } from 'react-redux'

const Services = ({
  className
}) => {
  

  /* Redux Hooks */

  const dispatch = useDispatch()

  
  /* States */

  const [searchValue, setSearchValue] = useState('')
  
  return (
    <div className={classNames(className, styles.root)}>

      <Topbar 
        titleList={[
          {
            text: 'Услуги',
            link: '/services'
          }
        ]} 
      />

      <div className={styles.services}>

        <TableTools 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        >
          <Button type='outlined' onClick={() => dispatch(openPopup('Создать сотрудника'))}>
            Добавить услугу
          </Button>
        </TableTools>

        <Service title='hello' />

      </div>

    </div>
  )
}

export default Services
