import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import API from '../API/API'
import { Topbar } from '../organisms'
import { login } from '../redux/actions/userActions'
import styles from '../scss/routes/Client.module.scss'

const Client = ({
  className
}) => {
  

  /* Redux Hooks */

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)


  /* React Router Dom */

  const { id } = useParams()


  /* States */

  const [data, setData] = useState(null)


  /* Effects */

  useEffect(() => {

    const config = {
      url: 'client/get_for_edit/'+id,
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }

    API(config)
      .then(res => res.data)
      .then(data => setData(data))
      .catch(error => {
        if (error.response.status === 401) 
          dispatch(login({...user, status: 'logouting'}))
      })
  }, [id, dispatch, user])


  /* Render */

  if (!data) return <></>
  return (
    <div 
      className={classNames(
        className, 
        styles.root
      )}
    >

    <Topbar
      titleList={[
        {
          text: 'Клиенты',
          link: '/clients'
        },
        {
          text: 'Подробная информация',
          link: '/client/'+id
        }
      ]}
    />
      
    </div>
  )
}

export default Client
