import React, { useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/TableFilter.module.scss'
import { Button } from '.'
import { ArrowHadSmallTop, ArrowTop, CheckBox, CheckBoxOutlineBlank, Filter } from '../icons'

const TableFilter = ({
  className='',
  sortList=[],
  filterList=[],
  onSort=()=>{}
}) => {

  const [open, setOpen] = useState(false)

  return (
    <div className={classNames(className, styles.root)}>
      
      <Button 
        type='text' 
        className={styles.label} 
        onCllick={() => setOpen(!open)}
        beforeIcon={<Filter />}
      >
        Фильтры
      </Button>

      {open &&
        <div className={styles.menu}>
          
          <span className={styles.menu__title}>
            Сортировка
          </span>
          
          {sortList.map(col => 
            <button 
              key={col.text}
              className={classNames(
                styles.sort_item, 
                col.active && styles['sort_item--active']
              )} 
              onClick={() => onSort(col.text)}
            >
              {col.text}
              <div className={styles.sort_item__arrow}>
                <ArrowTop size={16} />
              </div>
            </button>
          )}

          <div className={styles.divider} />

          <span className={styles.menu__title}>
            Фильтр
          </span>

          {filterList.map(col => 
            <React.Fragment key={col.text}>
              <button 
                key={col.text}
                className={classNames(
                  styles.filter_item, 
                  col.active && styles['filter_item--active']
                )} 
                onClick={() => onSort(col.text)}
              >
                {col.text}
                <div className={styles.filter_item__arrow}>
                  <ArrowHadSmallTop size={16} />
                </div>
              </button>
              {col.list.map(filter_tag => 
                <button 
                  key={filter_tag.text}
                  className={classNames(
                    styles.filter_tag, 
                    filter_tag.active && styles['filter_tag--active']
                  )} 
                  onClick={() => onSort(filter_tag.text)}
                >
                  {filter_tag.text}
                  <div className={styles.filter_tag__checkbox}>
                    {filter_tag.active ? <CheckBox size={16} /> : <CheckBoxOutlineBlank size={16} />}
                  </div>
                </button>
              )}
            </React.Fragment>  
          )}

        </div>
      }

    </div>
  )
}

export default TableFilter
