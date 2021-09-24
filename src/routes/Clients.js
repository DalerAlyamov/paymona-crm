import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import API from '../API/API'
import styles from '../scss/routes/Clients.module.scss'
import { Table, Topbar } from '../organisms'
import { Button } from '../atoms'
import { TableContainer } from '../molecules'
import { login } from '../redux/actions/userActions'
import { openPopup } from '../redux/actions/popupActions'
import { useDispatch, useSelector } from 'react-redux'
import { PopupAddClient, PopupEditClient } from '../popups'

const Clients = ({
  className
}) => {

  
  /* Variables */

  const template = ['1fr', '1fr', '1fr']

  const sortList = [
    {
      id: 'name',
      text: 'По наименованию',
      active: true
    },
    {
      id: 'domain_name',
      text: 'По доменному адресу',
      active: false
    },
    {
      id: 'count_of_products',
      text: 'По кол-ве услуг',
      active: false
    }
  ]
  const filterList = []
  

  /* Redux Hooks */

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  
  /* States */

  const [data, setData] = useState([])


  /* Functions */

  const handleDeleteClient = id => {

    const config = {
      url: 'client/delete/'+id,
      method: 'delete',
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }
    API(config)
      .then(res => res.data)
      .then(data => setData(data))
      .catch(error => {
        if (error.response.status === 401) {
          dispatch(login({...user, status: 'logouting'}))
          
        }
      })
  }

  const handleReloadData = () => {
    const config = {
      url: 'client/get/',
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }
    API(config)
      .then(res => res.data)
      .then(res => setData(res))
      .catch(error => {
        if (error.response.status === 401) {
          dispatch(login({...user, status: 'logouting'}))
          
        }
      })
  }


  /* UseEffects */

  useEffect(() => {
    if (user.status !== 'logined' && user.status !== 'logining') 
      return
    const config = {
      url: 'client/get/',
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }
    API(config)
      .then(res => res.data)
      .then(res => setData(res))
      .catch(error => {
        if (!error.response) return
        if (error.response.status === 401) {
          dispatch(login({...user, status: 'logouting'}))
          
        }
      })
  }, [user, dispatch])


  /* Render */

  return (
    <div className={classNames(className, styles.root)}>

      <Topbar 
        titleList={[
          {
            text: 'Клиенты',
            link: '/clients'
          }
        ]} 
      />

      <Table className={styles.table}>

        <TableContainer
          hasFilter
          hasRowMenu={user.type === 'superuser'}
          data={data}
          template={template}
          headers={['Наименование', 'Доменный адрес', 'Кол-во услуг']}
          searchPropsDependence={['name', 'domain_name']}
          initialSortList={sortList}
          initialFilterList={filterList}
          onReload={() => handleReloadData()}
          toolsChildren={
            <Button
              type='outlined' 
              onClick={() => dispatch(openPopup(<PopupAddClient setData={setData} />))}
            >
              Добавить клиента
            </Button>
          }
          rowPropsTemplate={['name', 'domain_name', 'count_of_products']}
          onEditRow={row_id => dispatch(openPopup(<PopupEditClient id={row_id} setData={setData} />))}
          onDeleteRow={row_id => handleDeleteClient(row_id)}
        />

      </Table>

    </div>
  )
}

export default Clients
