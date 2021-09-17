import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/LoginPanel.module.scss'
import { LoginTitle, Button } from '../atoms'
import { AnimatedInput } from '../molecules'
import { Wrap } from '../organisms'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions/userActions'

const LoginPanel = ({
  className='',
  title=''
}) => {


  /* States */

  const [login__inputValue, setLogin__inputValue] = useState('')

  const [password__inputValue, setPassword__inputValue] = useState('')
  const [password__inputFocusing, setPassword__inputFocusing] = useState(false)
  
  const [loginChecking, setLoginChecking] = useState(false)


  /* Redux hooks */

  const dispatch = useDispatch()


  /* Refs */

  const buttonLoginRef = useRef(null)


  /* Functions */

  const handleLogin = () => {
    setLoginChecking(true)

    const user = {
      login: login__inputValue, password: password__inputValue
    }

    dispatch(login({...user, status: 'logining'}))
    
    setTimeout(() => {
      dispatch(login({...user, status: 'logined'}))
      setLoginChecking(false)
      setLogin__inputValue('')
      setPassword__inputValue('')
    }, 1200)
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
        onKeyPress={e => {
          if (e.code === 'Enter')
            setPassword__inputFocusing(true)
        }}
      />
      
      <AnimatedInput 
        className={classNames(styles.input, loginChecking && styles.input__acceptance)}
        placeholder='Пароль'
        value={password__inputValue} 
        setValue={setPassword__inputValue}
        initialFocusing={password__inputFocusing}
        onBlur={() => setPassword__inputFocusing(false)}
        onKeyPress={e => {
          if (e.code === 'Enter')
            buttonLoginRef.current.click()
        }}
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
          ref={buttonLoginRef}
        >
          Войти
        </Button>

      </Wrap>

    </div>
  )
}

export default LoginPanel
