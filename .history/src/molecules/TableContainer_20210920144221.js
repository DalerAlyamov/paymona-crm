import React, { useMemo, useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/TableRowContainer.module.scss'
import { dynamicSort } from '../functions'
import { TableHeaders, TableRow, TableTools } from '.'
import { TableColumn } from '../atoms'
import { useDispatch } from 'react-redux'
import { openPopup } from '../redux/actions/popupActions'
import { PopupEdit } from '../popups'

const TableRowContainer = ({
  className='',
  data=[],
  template=['1fr'],
  headers=[],
  initialSortList=[],
  initialFilterList=[],
  toolsChildren=<></>,
  rowPropsTemplate=<></>
}) => {

  
  /* States */

  const [editedData, setEditedData] = useState(data)

  const [searchValue, setSearchValue] = useState('')
  const [sortList, setSortList] = useState(initialSortList)
  const [filterList, setFilterList] = useState(initialFilterList)


  /* UseEffects */

  useMemo(() => {

    const searchedData = data.filter(row => 
      row.name.toLowerCase().indexOf(searchValue.trim().toLowerCase()) !== -1 || 
      row.surname.toLowerCase().indexOf(searchValue.trim().toLowerCase()) !== -1
    )

    const filteredData = searchedData.filter(row => 
      filterList.find(filter => 
        filter.list.find(item => 
          item.text === row[filter.id] && item.active
        )
      )  
    )

    const sortedData = filteredData.sort(dynamicSort(sortList.find(prop => prop.active).id))

    setEditedData(sortedData)

  }, [data, searchValue, sortList, filterList])


  /* Render */

  return (
    <div className={classNames(className, styles.root)}>

      <TableTools 
        hasFilter
        sortList={sortList}
        filterList={filterList}
        searchValue={searchValue}
        setSortList={setSortList}
        setFilterList={setFilterList}
        setSearchValue={setSearchValue}
      >
        {toolsChildren}
      </TableTools>

      <TableHeaders template={template} hasMenu>
        {headers.map(col => 
          <TableColumn key={col}>
            {col}
          </TableColumn>  
        )}
      </TableHeaders>

      {editedData.map((row, index) => 
        <TableRow 
          hasMenu
          id={row.id} 
          key={row.id}
          honest={index%2===0}
          template={template}
          menu={<Menu id={row.id} />}
        >
          {rowPropsTemplate.map((prop, index) => 
            <TableColumn key={index}>
              {row[prop]}
            </TableColumn>  
          )}
        </TableRow>  
      )}
    </div>
  )
}

const Menu = ({
  id
}) => {

  const dispatch = useDispatch()

  return (
    <>
      <button 
        onClick={() => {
        dispatch(openPopup(<PopupEdit id={id} />))
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

export default TableRowContainer
