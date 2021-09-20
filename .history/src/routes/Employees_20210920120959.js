import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import API from '../API/API'
import styles from '../scss/routes/Employees.module.scss'
import { Table, Topbar } from '../organisms'
import { TableTools, TableRow } from '../molecules'
import { Button, TableColumn } from '../atoms'
import { TableHeaders } from '../molecules'
import { useDispatch, useSelector } from 'react-redux'
import { openPopup } from '../redux/actions/popupActions'
import { PopupAddEmployee } from '../popups'
import PopupEdit from '../popups/PopupEdit'
const Employees = ({
  className=''
}) => {

  
  /* Variables */

  const template = ['1fr', '1fr', '1fr', '1fr', '1fr']
  

  /* Redux Hooks */

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  
  /* States */

  const [data, setData] = useState([])

  const [searchValue, setSearchValue] = useState('')
  const [sortList, setSortList] = useState([
    {
      id: 'name',
      text: 'По имени',
      active: true
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
  ])
  const [filterList, setFilterList] = useState([
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
          text: 'employer',
          active: true
        }
      ]
    }
  ])

  
  /* UseEffects */

  useEffect(() => {
    const config = {
      url: 'employee/get/',
      method: 'get',
      headers: {
        'Authorization': user.token
      }
    }
    API(config)
      .then(res => res.data)
      .then(res => setData(res))
  }, [user.token])

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
            onClick={() => dispatch(openPopup(<Pop/>))}
          >
            Добавить сотрудника
          </Button>
        </TableTools>

        <TableHeaders template={template} hasMenu>
          {['Имя', 'Фамилия', 'Должность', 'Отдел', 'Тип'].map(col => 
            <TableColumn key={col}>
              {col}
            </TableColumn>  
          )}
        </TableHeaders>

        {data.map((col, index) => 
          <TableRow 
            hasMenu
            id={col.id} 
            key={col.id}
            honest={index%2===0}
            template={template} 
            menu={<Menu />}
          >
            <TableColumn>
              {col.name}
            </TableColumn>
            <TableColumn>
              {col.surname}
            </TableColumn>
            <TableColumn>
              {col.position}
            </TableColumn>
            <TableColumn>
              {col.department}
            </TableColumn>
            <TableColumn>
              {col.type}
            </TableColumn>
          </TableRow>  
        )}

      </Table>

    </div>
  )
}

const Menu = () => {

  const dispatch = useDispatch()

  return (
    <>
      <button 
        onClick={() => {
        dispatch(openPopup(<PopupEdit/>))
      }}
      >
        Редактировать
      </button>
      <button>
        Удалить
      </button>
    </>
  )
}

export default Employees
