import React, { useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/routes/Feedbacks.module.scss'
import { Table, Topbar } from '../organisms'
import { TableContainer } from '../molecules'

const Feedbacks = ({
  className
}) => {

  
  /* Variables */

  const template = ['1fr', '1fr', '1fr', '1fr']

  const sortList = [
    {
      id: 'sender',
      text: 'Отправитель',
      active: true
    },
    {
      id: 'date_of_send',
      text: 'Дата отправки',
      active: false
    }
  ]
  const filterList = [
    {
      id: 'status',
      text: 'По статусу',
      list: [
        {
          text: 'Не прочитано',
          active: true
        },
        {
          text: 'Прочитано',
          active: true
        },
        {
          text: 'Решено',
          active: true
        }
      ]
    },
    {
      id: 'product',
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
  ]

  
  /* States */

  const [data, setData] = useState()

  
  /* Functions */

  const handleReloadData = () => {

  }
  

  /* Render */

  return (
    <div className={classNames(className, styles.root)}>

      <Topbar
        titleList={[
          {
            text: 'Отзывы',
            link: '/feedbacks'
          }
        ]} 
      />

      <Table className={styles.table}>

        <TableContainer
          rowClickable
          onRowClick={id => console.log(id)}
          hasFilter
          hasRowMenu={false}
          data={data}
          template={template}
          headers={['Отправитель', 'Статаус', 'Услуга', 'Дата отправки']}
          initialSortList={sortList}
          initialFilterList={filterList}
          onReload={() => handleReloadData()}
          rowPropsTemplate={['name', 'status', 'service', 'date_of_send']}
        />

      </Table>

    </div>
  )
}

export default Feedbacks
