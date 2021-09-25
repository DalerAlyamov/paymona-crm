import classNames from 'classnames'
import styles from '../scss/routes/ClientPayment.module.scss'
import API from '../API/API'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Button, TableColumn } from '../atoms'
import { dynamicSort } from '../functions'
import { Replay } from '../icons'
import { TableHeaders, TableRow, TableTools } from '../molecules'
import { Table, Topbar, Wrap } from '../organisms'
import { openPopup } from '../redux/actions/popupActions'
import { logouting } from '../redux/actions/userActions'

const ClientPayment = ({
  className
}) => {

  
  /* Variables */

  const template = useMemo(() => ['1fr', '1fr', '1fr'], [])
  const headers = useMemo(() => ['Подписка', 'Сумма оплаты', 'Дата оплаты'], [])
  

  /* Redux Hooks */

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)


  /* React Router Dom */

  const { id } = useParams()


  /* States */

  const [data, setData] = useState([])
  const [editedTableData, setEditedTableData] = useState([])
  const [tableData, setTableData] = useState([])

  const [sortList, setSortList] = useState([
    {
      id: 'product',
      text: 'По подписке',
      active: true
    },
    {
      id: 'amount',
      text: 'По сумма оплаты',
      active: false
    },
    {
      id: 'date',
      text: 'По дата оплаты',
      active: false
    }
  ])
  const [filterList, setFilterList] = useState([
    {
      id: 'product',
      text: 'По подписке',
      list: [
        {
          text: 'Офисы',
          active: true
        },
        {
          text: 'Опросы',
          active: true
        },
        {
          text: 'Аналитика',
          active: true
        },
        {
          text: 'Машинное обучение',
          active: true
        }
      ]
    }
  ])


  /* Effects */

  useEffect(() => {

    const config = {
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }
    
    const dataConfig = {
      ...config,
      url: 'client/get_for_edit/'+id
    }

    API(dataConfig)
      .then(res => res.data)
      .then(data => setData(data))
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401)
          dispatch(logouting())
      })

    const tableConfig = {
      ...config,
      url: 'client/payment/'+id+'/get'
    }

    API(tableConfig)
      .then(res => res.data)
      .then(data => setTableData(data))
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401) 
          dispatch(logouting())
      })
  }, [id, dispatch, user])

  useEffect(() => {

    if (!tableData.length) return

    let filteredData = tableData.filter(row => 
      filterList.find(filter => 
        filter.list.find(item => 
          item.text === row[filter.id] && item.active
        )
      )
    )

    let sortedData = filteredData.sort(dynamicSort(sortList.find(prop => prop.active).id))

    setEditedTableData(sortedData)

  }, [tableData, sortList, filterList])


  /* Functions */

  const handleReloadTableData = () => {

    const config = {
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }
    
    const dataConfig = {
      ...config,
      url: 'client/payment/'+id+'/get'
    }

    API(dataConfig)
      .then(res => res.data)
      .then(_data => setTableData(_data))
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401) 
          dispatch(logouting())
      })
  }

  const handleDeleteClientEmployee = employee_id => {

    const config = {
      url: 'client/employee/'+id+'/delete/'+employee_id,
      method: 'delete',
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }
    API(config)
      .then(res => res.data)
      .then(_data => setTableData(_data))
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401) 
          dispatch(logouting())
      })
  }


  /* Render */

  if (!data) return <></>
  return (
    <div 
      className={classNames(
        className, 
        styles.root
      )}
    >

      <Topbar
        titleList={[
          {
            text: 'Клиенты',
            link: '/clients'
          },
          {
            text: 'История оплат',
            link: '/clients/'+id
          }
        ]}
      />

      <Table className={styles.table}>
        <TableTools 
          hasSearch={false}
          hasFilter
          sortList={sortList}
          filterList={filterList}
          setSortList={setSortList}
          setFilterList={setFilterList}
        >
          <Button
            type='outlined' 
            onClick={() => dispatch(openPopup('Добавить оплату'+id))}
          >
            Добавить оплату
          </Button>
        </TableTools>

        <Wrap>
          <Button 
            circle
            type='text'
            className={styles.reload_btn}
            beforeIcon={<Replay />} 
            onClick={() => handleReloadTableData()}
          />
        </Wrap>

        <TableHeaders template={template} hasMenu={user.status === 'superuser'}>
          {headers.map(col => 
            <TableColumn key={col}>
              {col}
            </TableColumn>  
          )}
        </TableHeaders>

        {editedTableData.map((row, index) => 
          <div
            key={row.id} 
            className={classNames(
              styles.rowButton
            )}
          >
            <TableRow
              hasMenu={user.status === 'superuser'}
              id={row.id} 
              honest={index%2===0}
              template={template}
              menu={<Menu onDeleteRow={() => handleDeleteClientEmployee(row.id)} />}
            >
              {['product', 'amount', 'date'].map((prop, index) => 
                <TableColumn key={index}>
                  {row[prop]}
                </TableColumn>  
              )}
            </TableRow>  
          </div>
        )}
      </Table>
      
    </div>
  )
}

const Menu = ({
  onDeleteRow
}) => {

  return (
    <>
      <button onClick={() => onDeleteRow()}>
        Удалить
      </button>
    </>
  )
}

export default ClientPayment
