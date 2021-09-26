import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/routes/Feedbacks.module.scss'
import { Table, Topbar } from '../organisms'
import { TableContainer } from '../molecules'
import { useDispatch, useSelector } from 'react-redux'
import API from '../API/API'
import { logouting } from '../redux/actions/userActions'
import { openPopup } from '../redux/actions/popupActions'
import { PopupShowFeedback } from '../popups'

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
  

  /* Redux Hooks */

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  
  /* States */

  const [data, setData] = useState([])
  const [filterList, setFilterList] = useState([
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
      list: []
    }
  ])


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
        if (error.response.status === 401 && user.status !== 'logouting') 
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
        if (error.response.status === 401 && user.status !== 'logouting') 
          dispatch(logouting())
      })
    API({
      url: 'service/getlist',
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + user.token
      },
    })
      .then(res => res.data)
      .then(data => setFilterList(prev => {
        const next = prev.concat()

        next.forEach(filter => {
          if (filter.id === 'product')
            filter.list = data.map(f => {
              return {
                active: true,
                text: f
              }
            })
        })

        return next
      }))
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401 && user.status !== 'logouting') 
          dispatch(logouting())
      })
  }, [user, dispatch])
  

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
          onRowClick={row_id => dispatch(openPopup(<PopupShowFeedback id={row_id} setParentData={setData} />, 600, 500))}
          headers={['Отправитель', 'Заголовок', 'Статус', 'Продукт', 'Дата отправки']}
          searchPropsDependence={['client', 'title']}
          initialSortList={sortList}
          initialFilterList={filterList}
          rowPropsTemplate={['client', 'title', 'status', 'product', 'created_at']}
        />

      </Table>

    </div>
  )
}

export default Feedbacks
