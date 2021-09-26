import React, { useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/ServiceLabel.module.scss'
import { ArrowHadSmallBottom } from '../icons'
import { useSelector } from 'react-redux'
import API from '../API/API'
import { useDispatch } from 'react-redux'
import { logouting } from '../redux/actions/userActions'

const ServiceLabel = ({
  id=0,
  setData=()=>{},
  className='',
  children='',
  open=false,
  onClick=()=>{}
}) => {

  const [title, setTitle] = useState(children)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleChangeTitle = () => {
    const config = {
      url: 'service/patch/'+id,
      method: 'patch',
      headers: {
        'Authorization': 'Bearer ' + user.token
      },
      data: JSON.stringify([
        {
          patch: 'name',
          to: title.trim()
        }
      ])
    }

    API(config)
      .then(res => res.data)
      .then(data => setData(data))
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401 && user.status !== 'logouting') 
          dispatch(logouting())
      })
  }

  return (
    <div className={classNames(className, styles.root)}>
      
      <div className={styles.label} >

        <div className={styles.title}>
          <input 
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)} 
            onClick={e => {
              e.target.select()
            }}
            onBlur={() => handleChangeTitle()}
            onKeyPress={e => {
              if (e.code === 'Enter')
                e.target.blur()
            }}
          />
        </div>

        <button
          onClick={onClick} 
          className={classNames(
            styles.arrow, 
            open && styles.arrow__rotate
          )}
        >
          <ArrowHadSmallBottom />
        </button>

      </div>

    </div>
  )
}

export default ServiceLabel
