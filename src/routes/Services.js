import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/routes/Services.module.scss'
import { Service, Table, Topbar, Wrap } from '../organisms'
import { Button } from '../atoms'
import { openPopup } from '../redux/actions/popupActions'
import { useDispatch, useSelector } from 'react-redux'
import { TableTools } from '../molecules'
import API from '../API/API'
import { PopupAddProduct } from '../popups'

const Services = ({
  className
}) => {
  

  /* Redux Hooks */

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  

  /* States */

  const [data, setData] = useState([])
  

  /* Effects */

  useEffect(() => {
    const config = {
      url: 'service/get',
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + user.token
      },
    }
    API(config)
      .then(res => res.data)
      .then(data => setData(data))
  }, [user])

  
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
          <Button type='outlined' onClick={() => dispatch(openPopup(<PopupAddProduct setData={setData} />))}>
            Добавить услугу
          </Button>
        </TableTools>

        <Wrap flex column gap={42}>
          {data.map(service => 
            <Service 
              setData={setData}
              key={service.id}
              id={service.id}
              initialOpenState={true}
              title={service.name}
              headers={['Клиент', 'Кол-во сотрудников', 'Дата подключения']} 
              clientList={service.client} 
            />
          )}
        </Wrap>

      </Table>

    </div>
  )
}

export default Services
