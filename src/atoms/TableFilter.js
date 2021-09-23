import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/TableFilter.module.scss'
import { Button } from '.'
import { ArrowHadSmallTop, ArrowTop, CheckBox, CheckBoxOutlineBlank, Filter } from '../icons'

const TableFilter = ({
  className='',
  sortList=[],
  filterList=[],
  onSetFilter=()=>{},
  onSort=()=>{}
}) => {

  const [open, setOpen] = useState(false)
  const [openedFilterText, setOpenFilterText] = useState(null)

  useEffect(() => {
    const handleWindowClick = e => {
      if (!e.target.closest('.'+styles.root))
        setOpen(false)
    }
    window.addEventListener('click', handleWindowClick)
    return () => window.removeEventListener('click', handleWindowClick)
  }, [])

  return (
    <div className={classNames(className, styles.root)}>
      
      <Button 
        type='text'
        className={classNames(styles.label, open && styles['label--active'])} 
        onClick={() => setOpen(!open)}
        beforeIcon={<Filter size={16} />}
      >
        Фильтры
      </Button>

      {open &&
        <div className={styles.menu}>
          
          {sortList.length !== 0 &&
            <> 
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
            </>
          }

          {filterList.length !== 0 && 
            <>
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
                      openedFilterText === col.text && styles['filter_item--active']
                    )} 
                    onClick={() => setOpenFilterText(prev => prev === col.text ? null : col.text)}
                  >
                    {col.text}
                    <div className={styles.filter_item__arrow}>
                      <ArrowHadSmallTop size={16} />
                    </div>
                  </button>
                  {openedFilterText === col.text && col.list.map(filter_tag => 
                    <button 
                      key={filter_tag.text}
                      className={classNames(
                        styles.filter_tag, 
                        filter_tag.active && styles['filter_tag--active']
                      )} 
                      onClick={() => onSetFilter(filter_tag.text)}
                    >
                      {filter_tag.text}
                      <div className={styles.filter_tag__checkbox}>
                        {filter_tag.active ? <CheckBox size={16} /> : <CheckBoxOutlineBlank size={16} />}
                      </div>
                    </button>
                  )}
                </React.Fragment>  
              )}
            </>
          }

        </div>
      }

    </div>
  )
}

export default TableFilter
