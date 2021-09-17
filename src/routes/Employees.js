import React, { useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/routes/Employees.module.scss'
import { Table } from '../organisms'
import { TableTools } from '../molecules'
import { Button } from '../atoms'

const Employees = ({
  className
}) => {


  /* States */

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

  return (
    <div className={classNames(className, styles.root)}>
      
      <Table>
        
        <TableTools 
          hasFilter
          sortList={sortList}
          filterList={filterList}
          searchValue={searchValue}
          setSortList={setSortList}
          setFilterList={setFilterList}
          setSearchValue={setSearchValue}
        >
          <Button type='outlined'>
            Добавить сотрудника
          </Button>
        </TableTools>

      </Table>

    </div>
  )
}

export default Employees
