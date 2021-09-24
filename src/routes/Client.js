import classNames from 'classnames'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import API from '../API/API'
import { Button, TableColumn } from '../atoms'
import { dynamicSort } from '../functions'
import { Replay } from '../icons'
import { TableHeaders, TableRow, TableTools } from '../molecules'
import { Table, Topbar, Wrap } from '../organisms'
import { PopupAddEmployeeToClient, PopupEditEmployeeToClient } from '../popups'
import { openPopup } from '../redux/actions/popupActions'
import { login } from '../redux/actions/userActions'
import styles from '../scss/routes/Client.module.scss'

const Client = ({
  className
}) => {

  
  /* Variables */

  const template = useMemo(() => ['1fr', '1fr', '1fr', '1fr'], [])
  const headers = useMemo(() => ['Имя', 'Фамилия', 'Тип', 'Электронная почта'], [])
  const searchPropsDependence = useMemo(() => ['name', 'surname', 'email'], [])
  

  /* Redux Hooks */

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)


  /* React Router Dom */

  const { id } = useParams()


  /* States */

  const [data, setData] = useState([])
  const [editedTableData, setEditedTableData] = useState([])
  const [tableData, setTableData] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const [sortList, setSortList] = useState([
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
      id: 'type',
      text: 'По типу',
      active: false
    },
    {
      id: 'email',
      text: 'По почте',
      active: false
    }
  ])
  const [filterList, setFilterList] = useState([
    {
      id: 'type',
      text: 'По типу',
      list: [
        {
          text: 'user',
          active: true
        },
        {
          text: 'superuser',
          active: true
        }
      ]
    },
    {
      id: 'products',
      text: 'По продукту',
      list: [
        {
          text: 'Опросы',
          active: true
        },
        {
          text: 'Офисы',
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
        if (!error.response) return
        if (error.response.status === 401) 
          dispatch(login({...user, status: 'logouting'}))
      })

    const tableConfig = {
      ...config,
      url: 'client/employee/'+id+'/get_list'
    }

    API(tableConfig)
      .then(res => res.data)
      .then(data => setTableData(data))
      .catch(error => {
        if (error.response.status === 401) 
          dispatch(login({...user, status: 'logouting'}))
      })
  }, [id, dispatch, user])

  useEffect(() => {

    if (!tableData.length) return

    let searchedData = tableData.filter(row => {
      let access = false
      searchPropsDependence.forEach(searchProp => {
        if (row[searchProp].toLowerCase().indexOf(searchValue.trim().toLowerCase()) !== -1)
          access = true
      })
      return access
    })

    if (searchValue.trim() === '')
      searchedData = tableData.concat()

    let filteredData = searchedData.filter(row => {

      let ok = false

      ok = filterList.find(filter => 
        filter.list.find(item => 
          item.text === row[filter.id] && item.active
        )
      )

      if (ok)
        ok = filterList.find(filter => filter.id === 'products').list.find(product => product.active && row.products.includes(product.text))

      return ok
    })

    let sortedData = filteredData.sort(dynamicSort(sortList.find(prop => prop.active).id))

    setEditedTableData(sortedData)

  }, [tableData, searchValue, sortList, filterList, searchPropsDependence])


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
      url: 'client/get_for_edit/'+id
    }

    API(dataConfig)
      .then(res => res.data)
      .then(data => setData(data))
      .catch(error => {
        if (!error.response) return
        if (error.response.status === 401) 
          dispatch(login({...user, status: 'logouting'}))
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
            text: 'Подробная информация',
            link: '/client/'+id
          }
        ]}
      />

      <Table className={styles.table}>
        <TableTools 
          hasFilter
          sortList={sortList}
          filterList={filterList}
          searchValue={searchValue}
          setSortList={setSortList}
          setFilterList={setFilterList}
          setSearchValue={setSearchValue}
        >
          <Button
            type='outlined' 
            onClick={() => dispatch(openPopup(<PopupAddEmployeeToClient id={id} setData={setTableData} />))}
          >
            Добавить пользователя
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

        <TableHeaders template={template} hasMenu>
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
              hasMenu
              id={row.id} 
              clickable={false}
              honest={index%2===0}
              template={template}
              menu={
                <Menu 
                  onEditRow={() => dispatch(openPopup(<PopupEditEmployeeToClient id={row.id} clientId={id} />))} 
                  onDeleteRow={() => dispatch(openPopup('удалить'+row.id))} 
                />
              }
            >
              {['name', 'surname', 'type', 'email'].map((prop, index) => 
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
  onEditRow, onDeleteRow
}) => {

  return (
    <>
      <button onClick={() => onEditRow()}>
        Редактировать
      </button>
      <button onClick={() => onDeleteRow()}>
        Удалить
      </button>
    </>
  )
}

export default Client
