import React, { useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/routes/Feedbacks.module.scss'
import { Table, Topbar } from '../organisms'
import { TableRowContainer } from '../molecules'

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

  const [data, setData] = useState([])
  

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

        <TableRowContainer
          hasFilter
          isRowClickable
          onRowClick={id => console.log(id)}
          data={data}
          template={template}
          headers={['Отправитель', 'Статаус', 'Услуга', 'Дата отправки']}
          initialSortList={sortList}
          initialFilterList={filterList}
          rowPropsTemplate={[]}
        />

      </Table>

    </div>
  )
}

export default Feedbacks
