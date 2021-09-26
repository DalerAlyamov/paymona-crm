import classNames from 'classnames'
import styles from '../scss/routes/ClientPayment.module.scss'
import API from '../API/API'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Button, TableColumn } from '../atoms'
import { dynamicSort } from '../functions'
import { Replay } from '../icons'
import { ClientHeaderInfo, TableHeaders, TableRow, TableTools } from '../molecules'
import { Table, Topbar, Wrap } from '../organisms'
import { openPopup } from '../redux/actions/popupActions'
import { logouting } from '../redux/actions/userActions'
import { PopupAddPaymentToClient, PopupInfoText } from '../popups'

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
      list: []
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
        if (error.response.status === 401 && user.status !== 'logouting') 
          dispatch(logouting())
      })

    API({
      url: 'service/getlist',
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + user.token
      },
    })
      .then(res => res.data)
      .then(data => setFilterList(prev => {
        const next = prev.concat()

        next.forEach(filter => {
          if (filter.id === 'product')
            filter.list = data.map(f => {
              return {
                active: true,
                text: f
              }
            })
        })

        return next
      }))
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401 && user.status !== 'logouting') 
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


    if (sortList.find(prop => prop.active).reverse)
      return setEditedTableData(sortedData.reverse())
    setEditedTableData(sortedData)

  }, [tableData, sortList, filterList])


  /* Functions */

  const handleDeleteClientPayment = payment_id => {

    const config = {
      url: 'client/payment/'+id+'/delete/'+payment_id,
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
        if (error.response.status === 401 && user.status !== 'logouting') 
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

        <ClientHeaderInfo 
          logo={data.logo}
          title={data.name}
          domain={data.domain_name}
          product={data.products}
        />

        <TableTools 
          hasSearch={false}
          hasFilter
          sortList={sortList}
          filterList={filterList}
          setSortList={setSortList}
          setFilterList={setFilterList}
        >
          {user.type === 'superuser' ? 
            <Button
              type='outlined' 
              onClick={() => dispatch(openPopup(<PopupAddPaymentToClient id={id} setData={setTableData} />))}
            >
              Добавить оплату
            </Button>
          : ''}
        </TableTools>

        <TableHeaders template={template} hasMenu={user.type === 'superuser'}>
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
              hasMenu={user.type === 'superuser'}
              id={row.id} 
              honest={index%2===0}
              template={template}
              menu={<Menu onDeleteRow={() => 
                dispatch(openPopup(
                  <PopupInfoText 
                    onBtn1Click={() => handleDeleteClientPayment(row.id)} 
                    text='Вы уверены, что хотите удалить оплату?'
                    btn2Text='Отмена'
                    btn1Text='Уверен'
                  />
                ))
              }/>}
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
