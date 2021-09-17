import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/TableTools.module.scss'
import { TableSearch } from '../atoms'
import { Wrap } from '.'

const TableTools = ({
  className='',
  hasFilter=false,
  searchValue='',
  setSearchValue=()=>{},
  onSearchKeyPress=()=>{},
  children=<></>
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      
      <TableSearch 
        value={searchValue}
        setValue={setSearchValue}
        onKeyPress={onSearchKeyPress}
      />

      <Wrap flex alignCenter>
        
      </Wrap>

    </div>
  )
}

export default TableTools
