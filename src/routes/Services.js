import React, { useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/routes/Services.module.scss'
import { Service, Table, Topbar, Wrap } from '../organisms'
import { Button } from '../atoms'
import { openPopup } from '../redux/actions/popupActions'
import { useDispatch } from 'react-redux'
import { TableTools } from '../molecules'

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
            text: 'Продукты',
            link: '/services'
          }
        ]} 
      />

      <Table className={styles.wrap}>

        <TableTools 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        >
          <Button type='outlined' onClick={() => dispatch(openPopup('добавить услугу'))}>
            Добавить услугу
          </Button>
        </TableTools>

        <Wrap flex column gap={42}>
          <Service 
            initialOpenState={true}
            title='Paymona Polls'
            headers={['Клиент', 'Кол-во сотрудников', 'Дата подключения']} 
            clientList={[
              {
                name: 'Tcell',
                count: '12',
                сonnection_date: '19/01/2021'
              },
              {
                name: 'Megaphon',
                count: '54',
                сonnection_date: '24/05/2021'
              },
              {
                name: 'RTSU',
                count: '7',
                сonnection_date: '31/02/2021'
              }
            ]} 
          />
          <Service 
            initialOpenState={true}
            title='Paymona Offices'
            headers={['Клиент', 'Кол-во сотрудников', 'Дата подключения']} 
            clientList={[
              {
                name: 'Tcell',
                count: '12',
                сonnection_date: '19/01/2021'
              },
              {
                name: 'Megaphon',
                count: '54',
                сonnection_date: '24/05/2021'
              },
              {
                name: 'RTSU',
                count: '7',
                сonnection_date: '31/02/2021'
              }
            ]} 
          />
        </Wrap>

      </Table>

    </div>
  )
}

export default Services
