import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/TableSearch.module.scss'
import { Search } from '../icons'

const TableSearch = ({
  className='',
  value='',
  setValue='',
  onKeyPress=()=>{}
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      <div className={styles.icon}>
        <Search size={20} />
      </div>
      <input 
        className={styles.input}
        type="text" 
        value={value}
        onChange={e => setValue(e.target.value)} 
        onKeyPress={onKeyPress}
        placeholder='Поиск'
      />
    </div>
  )
}

export default TableSearch
