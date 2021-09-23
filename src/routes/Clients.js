import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import API from '../API/API'
import styles from '../scss/routes/Clients.module.scss'
import { Table, Topbar } from '../organisms'
import { Button } from '../atoms'
import { TableContainer } from '../molecules'
import { login, logout } from '../redux/actions/userActions'
import { openPopup } from '../redux/actions/popupActions'
import { useDispatch, useSelector } from 'react-redux'

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
      id: 'address',
      text: 'По доменному адресу',
      active: false
    },
    {
      id: 'services_count',
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
        if(error.response.status === 401) {
          dispatch(login({...user, status: 'logouting'}))
          setTimeout(() => {
            dispatch(logout())
          }, 1200)
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
        if(error.response.status === 401) {
          dispatch(login({...user, status: 'logouting'}))
          setTimeout(() => {
            dispatch(logout())
          }, 1200)
        }
      })
  }


  /* UseEffects */

  useEffect(() => {
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
        if(error.response.status === 401) {
          dispatch(login({...user, status: 'logouting'}))
          setTimeout(() => {
            dispatch(logout())
          }, 1200)
        }
      })
  }, [user, dispatch])


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
          initialSortList={sortList}
          searchPropsDependence={['name', 'surname']}
          initialFilterList={filterList}
          onReload={() => handleReloadData()}
          toolsChildren={
            <Button
              type='outlined' 
              onClick={() => dispatch(openPopup('добавить клиента'))}
            >
              Добавить сотрудника
            </Button>
          }
          rowPropsTemplate={['name', 'surname', 'position', 'department', 'type']}
          onEditRow={row_id => dispatch(openPopup('изменить клиента'))}
          onDeleteRow={row_id => handleDeleteClient(row_id)}
        />

      </Table>

    </div>
  )
}

export default Clients
