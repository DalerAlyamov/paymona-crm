import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import API from '../API/API'
import styles from '../scss/routes/Employees.module.scss'
import { Table, Topbar } from '../organisms'
import { TableContainer } from '../molecules'
import { Button } from '../atoms'
import { useDispatch, useSelector } from 'react-redux'
import { openPopup } from '../redux/actions/popupActions'
import { PopupEditEmployee, PopupAddEmployee, PopupInfoText } from '../popups'
import { logouting } from '../redux/actions/userActions'

const Employees = ({
  className=''
}) => {

  
  /* Variables */

  const template = ['1fr', '1fr', '1fr', '1fr', '1fr']

  const sortList = [
    {
      id: 'name',
      text: 'По имени',
      active: true
    },
    {
      id: 'surname',
      text: 'По фамилии',
      active: false
    },
    {
      id: 'position',
      text: 'По должности',
      active: false
    },
    {
      id: 'departament',
      text: 'По отделу',
      active: false
    },
    {
      id: 'type',
      text: 'По типу',
      active: false
    }
  ]
  const filterList = [
    {
      id: 'type',
      text: 'По типу',
      list: [
        {
          text: 'sales',
          active: true
        },
        {
          text: 'teamlead',
          active: true
        },
        {
          text: 'employee',
          active: true
        },
        {
          text: 'superuser',
          active: true
        }
      ]
    }
  ]
  

  /* Redux Hooks */

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  
  /* States */

  const [data, setData] = useState([])


  /* Functions */

  const handleDeleteEmplyeee = id => {

    if (id === user.id)
      return dispatch(openPopup(<PopupInfoText text='Нельзя удалять самого себя' />, 500))

    const config = {
      url: 'employee/delete/'+id,
      method: 'delete',
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }
    API(config)
      .then(res => res.data)
      .then(data => setData(data))
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401 && user.status !== 'logouting') 
          dispatch(logouting())
      })
  }

  const handleReloadData = () => {
    const config = {
      url: 'employee/get/',
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }
    API(config)
      .then(res => res.data)
      .then(res => setData(res))
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401 && user.status !== 'logouting') 
          dispatch(logouting())
      })
  }


  /* UseEffects */

  useEffect(() => {
    if (user.status !== 'logined' && user.status !== 'logining') 
      return
    const config = {
      url: 'employee/get/',
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }
    API(config)
      .then(res => res.data)
      .then(res => setData(res))
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401 && user.status !== 'logouting') 
          dispatch(logouting())
      })
  }, [user, dispatch])
  

  /* Render */

  return (
    <div className={classNames(className, styles.root)}>

      <Topbar 
        titleList={[
          {
            text: 'Сотрудники',
            link: '/employees'
          }
        ]} 
      />

      <Table className={styles.table}>

        <TableContainer
          hasFilter
          hasRowMenu={user.type === 'superuser'}
          data={data}
          template={template}
          headers={['Имя', 'Фамилия', 'Должность', 'Отдел', 'Тип']}
          initialSortList={sortList}
          searchPropsDependence={['name', 'surname', 'position', 'department']}
          initialFilterList={filterList}
          onReload={() => handleReloadData()}
          toolsChildren={
            <Button
              type='outlined' 
              onClick={() => dispatch(openPopup(<PopupAddEmployee setData={setData} title='Добавить сотрудника'/>))}
            >
              Добавить сотрудника
            </Button>
          }
          rowPropsTemplate={['name', 'surname', 'position', 'department', 'type']}
          onEditRow={row_id => dispatch(openPopup(<PopupEditEmployee id={row_id} setData={setData} />))}
          onDeleteRow={row_id => handleDeleteEmplyeee(row_id)}
        />

      </Table>

    </div>
  )
}

export default Employees
