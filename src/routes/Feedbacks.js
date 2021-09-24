import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/routes/Feedbacks.module.scss'
import { Table, Topbar } from '../organisms'
import { TableContainer } from '../molecules'
import { useDispatch, useSelector } from 'react-redux'
import API from '../API/API'
import { logouting } from '../redux/actions/userActions'
import { openPopup } from '../redux/actions/popupActions'

const Feedbacks = ({
  className
}) => {

  
  /* Variables */

  const template = ['1fr', '1fr', '1fr', '1fr', '1fr']

  const sortList = [
    {
      id: 'client',
      text: 'Отправитель',
      active: true
    },
    {
      id: 'created_at',
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
  

  /* Redux Hooks */

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  
  /* States */

  const [data, setData] = useState([])


  /* Functions */

  const handleReloadData = () => {
    if (user.status !== 'logined' && user.status !== 'logining') 
      return
    const config = {
      url: 'feedback/get',
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }
    API(config)
      .then(res => res.data)
      .then(res => setData(res))
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401) 
          dispatch(logouting())
      })
  }


  /* Effects */

  useEffect(() => {
    if (user.status !== 'logined' && user.status !== 'logining') 
      return
    const config = {
      url: 'feedback/get',
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }
    API(config)
      .then(res => res.data)
      .then(res => setData(res))
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401) 
          dispatch(logouting())
      })
  }, [user, dispatch])

  useEffect(() => {
    console.log(data)
  }, [data])
  

  /* Render */

  return (
    <div className={classNames(className, styles.root)}>

      <Topbar
        titleList={[{
          text: 'Отзывы',
          link: '/feedbacks'
        }]} 
      />

      <Table className={styles.table}>

        <TableContainer
          hasFilter
          rowClickable
          data={data}
          template={template}
          onRowClick={row_id => dispatch(openPopup(row_id))}
          headers={['Отправитель', 'Заголовок', 'Статус', 'Продукт', 'Дата отправки']}
          initialSortList={sortList}
          searchPropsDependence={['client', 'title']}
          initialFilterList={filterList}
          onReload={() => handleReloadData()}
          rowPropsTemplate={['client', 'title', 'status', 'product', 'created_at']}
        />

      </Table>

    </div>
  )
}

export default Feedbacks
