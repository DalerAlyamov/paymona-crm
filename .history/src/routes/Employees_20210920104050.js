import React, { useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/routes/Employees.module.scss'
import { Table, Topbar } from '../organisms'
import { TableTools, TableRow } from '../molecules'
import { Button, TableColumn } from '../atoms'
import { TableHeaders } from '../molecules'
import { useDispatch } from 'react-redux'
import { openPopup } from '../redux/actions/popupActions'
import { PopupAddEmployee } from '../popups'
const Employees = ({
  className=''
}) => {

  
  /* Variables */

  const template = ['1fr', '1fr', '1fr', '1fr']
  

  /* Redux Hooks */

  const dispatch = useDispatch()

  
  /* States */

  // const [data, setData] = useState(null)

  const [searchValue, setSearchValue] = useState('')
  const [sortList, setSortList] = useState([
    {
      id: 'login',
      text: 'По логину',
      active: true
    },
    {
      id: 'type',
      text: 'По типу',
      active: false
    },
    {
      id: 'last_login',
      text: 'По последнему посещению',
      active: false
    }
  ])
  const [filterList, setFilterList] = useState([
    {
      id: 'type',
      text: 'По типу',
      list: [
        {
          text: 'Superuser',
          active: true
        },
        {
          text: 'User',
          active: true
        }
      ]
    }
  ])

  
  /* UseEffects */

  // useEffect(() => {
  //   const config = {
  //     url: '',
  //     method: 'get',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }
  //   API(config)
  //     .then(res => res.data)
  //     .then(res => console.log(res))
  // }, [])

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
            onClick={() => dispatch(openPopup(<PopupAddEmployee title='Добавить сотрудника'/>))}
          >
            Добавить сотрудника
          </Button>
        </TableTools>

        <TableHeaders template={template} hasMenu>
          {['Отображаемое имя', 'Должность', 'Отдел', 'Последнее посещение'].map(col => 
            <TableColumn key={col}>
              {col}
            </TableColumn>  
          )}
        </TableHeaders>

        <TableRow 
          hasMenu
          honest
          template={template} 
          id={1} 
          menu={<Menu />}
        >
          <TableColumn>
            Далер
          </TableColumn>
          <TableColumn>
            Webdev
          </TableColumn>
          <TableColumn>
            Frontend
          </TableColumn>
          <TableColumn>
            19/11/2020
          </TableColumn>
        </TableRow>

      </Table>

    </div>
  )
}

const Menu = () => {
  return (
    <>
      <button >
        Редактировать
      </button>
      <button>
        Удалить
      </button>
    </>
  )
}

export default Employees
