import React from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/LoginPage.module.scss'
import { LoginLeftSide } from '../atoms'
import { LoginRightSide } from './'

const LoginPage = ({
  className='',
  isLogged=false
}) => {

  return (
    <div className={classNames(className, styles.root)}>

      <LoginLeftSide status={isLogged ? 'open' : 'close' } />

      <LoginRightSide status={isLogged ? 'open' : 'close' } />
      
    </div>
  )
}

export default LoginPage
