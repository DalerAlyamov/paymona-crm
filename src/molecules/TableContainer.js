import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/TableContainer.module.scss'
import { dynamicSort } from '../functions'
import { TableHeaders, TableRow, TableTools } from '.'
import { Button, TableColumn } from '../atoms'
import { Replay } from '../icons'

const TableContainer = ({
  className='',
  data=[],
  template=['1fr'],
  headers=[],
  searchPropsDependence=[],
  hasFilter=false,
  hasRowMenu=false,
  rowClickable=false,
  initialSortList=[],
  initialFilterList=[],
  toolsChildren=<></>,
  rowPropsTemplate=<></>,
  onEditRow=()=>{},
  onDeleteRow=()=>{},
  onRowClick=()=>{},
  onReload=()=>{}
}) => {


  /* States */

  const [editedData, setEditedData] = useState(data)

  const [searchValue, setSearchValue] = useState('')
  const [sortList, setSortList] = useState(initialSortList)
  const [filterList, setFilterList] = useState(initialFilterList)


  /* UseEffects */

  useEffect(() => {

    if (!searchPropsDependence.length)  
      return setEditedData(data.concat())

    let searchedData = data.filter(row => {
      let access = false
      searchPropsDependence.forEach(searchProp => {
        if (row[searchProp].toLowerCase().indexOf(searchValue.trim().toLowerCase()) !== -1)
          access = true
      })
      return access
    })

    if (searchValue.trim() === '')
      searchedData = data.concat()

    let filteredData = searchedData.filter(row => 
      filterList.find(filter => 
        filter.list.find(item => 
          item.text === row[filter.id] && item.active
        )
      )  
    )

    if (!filterList.length)
      filteredData = searchedData

    let sortedData = filteredData.sort(dynamicSort(sortList.find(prop => prop.active).id))

    if (!sortList.length)
      sortedData = filteredData

    setEditedData(sortedData)

  }, [data, searchValue, sortList, filterList, searchPropsDependence])


  /* Render */

  return (
    <div className={classNames(className, styles.root)}>

      <TableTools 
        hasFilter={hasFilter}
        sortList={sortList}
        filterList={filterList}
        searchValue={searchValue}
        setSortList={setSortList}
        setFilterList={setFilterList}
        setSearchValue={setSearchValue}
      >
        {toolsChildren}
      </TableTools>

      <Button 
        circle
        type='text'
        className={styles.reload_btn}
        beforeIcon={<Replay />} 
        onClick={onReload}
      />   

      <TableHeaders template={template} hasMenu={hasRowMenu}>
        {headers.map(col => 
          <TableColumn key={col}>
            {col}
          </TableColumn>  
        )}
      </TableHeaders>

      {editedData.map((row, index) => 
        <div
          key={row.id} 
          className={classNames(
            styles.rowButton, 
            rowClickable && styles.rowButton__clickable
          )}
          onClick={() => onRowClick(row.id)}
        >
          <TableRow 
            hasMenu={hasRowMenu}
            id={row.id} 
            honest={index%2===0}
            template={template}
            menu={
              <Menu 
                onEditRow={() => onEditRow(row.id)} 
                onDeleteRow={() => onDeleteRow(row.id)} 
              />
            }
          >
            {rowPropsTemplate.map((prop, index) => 
              <TableColumn key={index}>
                {row[prop]}
              </TableColumn>  
            )}
          </TableRow>  
        </div>
      )}
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

export default TableContainer
