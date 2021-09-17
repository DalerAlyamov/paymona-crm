import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/LoginPanel.module.scss'
import { LoginTitle, Button } from '../atoms'
import { AnimatedInput } from '../molecules'
import { Wrap } from '../organisms'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions/userActions'
import API from '../API/API'

const LoginPanel = ({
  className='',
  title=''
}) => {


  /* States */

  const [email__inputValue, setEmail__inputValue] = useState('')

  const [password__inputValue, setPassword__inputValue] = useState('')
  const [password__inputFocusing, setPassword__inputFocusing] = useState(false)
  
  const [emailChecking, setEmailChecking] = useState(false)


  /* Redux hooks */

  const dispatch = useDispatch()


  /* Refs */

  const buttonEmailRef = useRef(null)


  /* Functions */

  const handleEmail = () => {
    setEmailChecking(true)

    const config = {
      url: 'login/',
      method: 'post',
      data: JSON.stringify({
        email: email__inputValue,
        password: password__inputValue
      })
    } 

    API(config)
      .then(res => res.data)
      .then(res => {
        const user = {
          email: email__inputValue,
          password: password__inputValue,
          token: res.access_token
        }
        dispatch(login({...user, status: 'logining'}))
        
        setTimeout(() => {
          dispatch(login({...user, status: 'logined'}))
          setEmailChecking(false)
          setEmail__inputValue('')
          setPassword__inputValue('')
        }, 1200)
      })
  }

  const handleForgetPassword = () => {

  }


  /* Render */

  return (
    <div className={classNames(className, styles.root)}>
      
      <LoginTitle className={styles.title}>{title}</LoginTitle>
      
      <AnimatedInput 
        className={classNames(styles.input, emailChecking && styles.input__acceptance)}
        placeholder='Email'
        value={email__inputValue} 
        setValue={setEmail__inputValue}
        initialFocusing={true}
        onKeyPress={e => {
          if (e.code === 'Enter')
            setPassword__inputFocusing(true)
        }}
      />
      
      <AnimatedInput 
        className={classNames(styles.input, emailChecking && styles.input__acceptance)}
        placeholder='Пароль'
        value={password__inputValue} 
        setValue={setPassword__inputValue}
        initialFocusing={password__inputFocusing}
        onBlur={() => setPassword__inputFocusing(false)}
        onKeyPress={e => {
          if (e.code === 'Enter')
            buttonEmailRef.current.click()
        }}
        isPassword
      />

      <Wrap flex spaceBetween>

        <Button 
          onClick={() => handleForgetPassword()} 
          type='text' 
          disabled={emailChecking}
        >
          Забыли пароль?
        </Button>

        <Button 
          onClick={() => handleEmail()} 
          disabled={emailChecking}
          ref={buttonEmailRef}
        >
          Войти
        </Button>

      </Wrap>

    </div>
  )
}

export default LoginPanel
