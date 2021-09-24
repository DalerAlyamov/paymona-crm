import React from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/TopbarUserPanelMenu.module.scss'
import { Button, TopbarUserAvatar } from '../atoms'
import { Wrap } from '../organisms'
import { useSelector } from 'react-redux'
import { Exit } from '../icons'
import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/actions/userActions'

const TopbarUserPanelMenu = ({
  className='',
  onClose=()=>{}
}) => {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <div className={classNames(className, styles.root)}>
      <TopbarUserAvatar />

      <Wrap>
        <div className={styles.email}>
          {user.email}
        </div>
      </Wrap>

      <Button
        type='outlined'
        beforeIcon={<Exit size={16} />}
        onClick={() => {
          onClose()
          dispatch(login({...user, status: 'logouting'}))
        }}
      >
        Выход
      </Button>

    </div>
  )
}

export default TopbarUserPanelMenu
