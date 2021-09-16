import React, { useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/LoginPanel.module.scss'
import { LoginTitle, Button } from '../atoms'
import { AnimatedInput, Wrap } from '../molecules'

const LoginPanel = ({
  className='',
  title=''
}) => {


  /* States */

  const [login__inputValue, setLogin__inputValue] = useState('')
  const [password__inputValue, setPassword__inputValue] = useState('')
  
  const [loginChecking, setLoginChecking] = useState(false)


  /* Functions */
  const handleLogin = () => {
    setLoginChecking(true)
  }

  const handleForgetPassword = () => {

  }


  /* Render */
  return (
    <div className={classNames(className, styles.root)}>
      
      <LoginTitle className={styles.title}>{title}</LoginTitle>
      
      <AnimatedInput 
        className={classNames(styles.input, loginChecking && styles.input__acceptance)}
        placeholder='Логин'
        value={login__inputValue} 
        setValue={setLogin__inputValue}
        initialFocusing={true}
      />
      
      <AnimatedInput 
        className={classNames(styles.input, loginChecking && styles.input__acceptance)}
        placeholder='Пароль'
        value={password__inputValue} 
        setValue={setPassword__inputValue}
        initialFocusing={true}
        isPassword
      />

      <Wrap flex spaceBetween>

        <Button 
          onClick={() => handleForgetPassword()} 
          type='text' 
          disabled={loginChecking}
        >
          Забыли пароль?
        </Button>

        <Button 
          onClick={() => handleLogin()} 
          disabled={loginChecking}
        >
          Войти
        </Button>

      </Wrap>

    </div>
  )
}

export default LoginPanel
