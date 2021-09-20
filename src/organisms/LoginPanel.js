import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/LoginPanel.module.scss'
import { LoginTitle, Button } from '../atoms'
import { AnimatedInput } from '../molecules'
import { Wrap } from '../organisms'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/userActions'
import API from '../API/API'

const LoginPanel = ({
  className=''
}) => {


  /* States */

  const [page, setPage] = useState('login')

  const [email__inputValue, setEmail__inputValue] = useState('')
  
  const [code__inputValue, setCode__inputValue] = useState('')
  
  const [password__inputValue, setPassword__inputValue] = useState('')
  const [password__inputFocusing, setPassword__inputFocusing] = useState(false)
  
  const [emailChecking, setEmailChecking] = useState(false)

  const [resendCodeTimeout, setResendCodeTimeout] = useState(0)

  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPassword__inputFocusing, setConfirmPassword__inputFocusing] = useState(false)

  const [error, setError] = useState('')


  /* Redux hooks */

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)


  /* Refs */

  const buttonEmailRef = useRef(null)
  const buttonNextRef = useRef(null)
  const buttonChangePasswordRef = useRef(null)


  /* Functions */

  const handleLogin = () => {
    setError('')
    setEmailChecking(true)

    const config = {
      url: 'login/',
      method: 'post',
      data: JSON.stringify({
        email: email__inputValue.replaceAll('@paymona.com', '')+'@paymona.com',
        password: password__inputValue
      })
    } 

    API(config)
      .then(res => res.data)
      .then(res => {
        const user = {
          email: email__inputValue.replaceAll('@paymona.com', '')+'@paymona.com',
          password: password__inputValue,
          token: res.access_token,
          type: res.type,
          avatar: res.avatar,
          surname: res.surname
        }
        dispatch(login({...user, status: 'logining'}))

        if (res['one-time'])
          setPage('change_password')
        else
          setTimeout(() => {
            dispatch(login({...user, status: 'logined'}))
            setEmailChecking(false)
            setEmail__inputValue('')
            setPassword__inputValue('')
          }, 1200)
      })
      .catch(error => {
        if(error.response.status === 404)
          setTimeout(() => {
            setError('Неправильная почта или пароль')
            setEmailChecking(false)
          }, 1000)
      })
  }

  const sendEmailToResetPassword = (block=true) => {
    setError('')
    if (block)
      setEmailChecking(true)

    const config = {
      url: 'login/forgot/',
      method: 'post',
      data: JSON.stringify({
        email: email__inputValue.replaceAll('@paymona.com', '')+'@paymona.com'
      })
    } 

    API(config)
      .then(() => {
        setPage('get_code')
        setEmailChecking(false)
      })
      .catch(error => {
        if(error.response.status === 404)
          setTimeout(() => {
            setError('Пользователь не найден')
            setEmailChecking(false)
          }, 1500)
      })
  }

  const handleCheckCode = () => {
    setError('')
    setEmailChecking(true)

    const config = {
      url: 'login/check_code/',
      method: 'post',
      data: JSON.stringify({
        code: code__inputValue,
        email: email__inputValue.replaceAll('@paymona.com', '')+'@paymona.com'
      })
    } 

    API(config)
      .then(() => {
        setPage('change_password')
        setEmailChecking(false)
      })
      .catch(error => {
        if(error.response.status === 404)
          setTimeout(() => {
            setError('Введенный код недействителен')
            setEmailChecking(false)
          }, 1500)
      })
  }

  const changePassword = () => {
    setError('')
    setEmailChecking(true)

    if (confirmPassword !== newPassword) {
      setError('Пароли не совпадают')
      return setEmailChecking(false)
    }
    
    let data = {
      email: email__inputValue.replaceAll('@paymona.com', '')+'@paymona.com',
      password: newPassword
    }

    if (code__inputValue)
      data = {...data, code: code__inputValue}

    if (user.token)
      data = {...data, token: user.token}

    const config = {
      url: 'login/new_password/',
      method: 'post',
      data: JSON.stringify(data)
    } 

    API(config)
      .then(() => {
        setPage('login')
        setResendCodeTimeout('')
        setNewPassword('')
        setConfirmPassword('')
        setEmailChecking(false)
      })
      .catch(error => {
        if(error.response.status === 404)
          setTimeout(() => {
            setEmailChecking(false)
          }, 1500)
      })
  }


  /* useEffects */

  useEffect(() => {
    if (resendCodeTimeout <= 0) 
      return
    setTimeout(() => {
      setResendCodeTimeout(prev => prev-1 < 0 ? 0 : prev-1)
    }, 1000)
  }, [resendCodeTimeout])

  useEffect(() => {
    if (page === 'get_code') 
      setResendCodeTimeout(45)
  }, [page])


  /* Render */

  return (
    <div className={classNames(className, styles.root)}>
      
      {page === 'login' &&
        <LoginTitle className={styles.title}>Вход</LoginTitle>
      }

      {(page === 'get_code' || page === 'forget_password' || page === 'change_password') &&
        <LoginTitle className={styles.title}>Сброс пароля</LoginTitle>
      }

      {page === 'get_code' &&
        <span className={styles.info_text}>
          Мы отправили код подтверждения на вашу почту
        </span>
      }
      
      {(page === 'login' || page === 'forget_password') &&
        <AnimatedInput 
          className={classNames(styles.input, emailChecking && styles.input__acceptance)}
          placeholder='Email'
          error={error !== ''}
          value={email__inputValue} 
          setValue={setEmail__inputValue}
          initialFocusing={true}
          suffix='@paymona.com'
          onKeyPress={e => {
            if (e.code === 'Enter')
              if (page === 'forget_password')
                buttonNextRef.current.click()
              else
                setPassword__inputFocusing(true)
          }}
        />
      }
          
      {page === 'login' &&
        <AnimatedInput 
          className={classNames(styles.input, emailChecking && styles.input__acceptance)}
          placeholder='Пароль'
          value={password__inputValue} 
          error={error !== ''}
          setValue={setPassword__inputValue}
          initialFocusing={password__inputFocusing}
          onBlur={() => setPassword__inputFocusing(false)}
          onKeyPress={e => {
            if (e.code === 'Enter')
              buttonEmailRef.current.click()
          }}
          isPassword
        />
      }
          
      {page === 'get_code' &&
        <AnimatedInput 
          className={classNames(styles.input, emailChecking && styles.input__acceptance)}
          placeholder='Код'
          error={error !== ''}
          value={code__inputValue} 
          setValue={setCode__inputValue}
          initialFocusing={true}
          onKeyPress={e => {
            if (e.code === 'Enter')
              buttonNextRef.current.click()
          }}
        />
      }
          
      {page === 'change_password' &&
        <>
          <AnimatedInput 
            className={classNames(styles.input, emailChecking && styles.input__acceptance)}
            placeholder='Новый пароль'
            value={newPassword} 
            error={error !== ''}
            setValue={setNewPassword}
            initialFocusing={true}
            onKeyPress={e => {
              if (e.code === 'Enter')
                setConfirmPassword__inputFocusing(true)
            }}
            isPassword
          />
          <AnimatedInput 
            className={classNames(styles.input, emailChecking && styles.input__acceptance)}
            placeholder='Подтвердите пароль'
            value={confirmPassword} 
            error={error !== ''}
            setValue={setConfirmPassword}
            initialFocusing={confirmPassword__inputFocusing}
            onKeyPress={e => {
              if (e.code === 'Enter')
                buttonChangePasswordRef.current.click()
            }}
            isPassword
          />
        </>
      }

      {error !== '' &&
        <span className={styles.error_text}>
          {error}
        </span>
      }

      <Wrap flex spaceBetween className={styles.footer}>

        {page === 'login' &&
          <> 
            <Button 
              onClick={() => {
                setPage('forget_password')
                setError('')
              }} 
              type='text' 
              disabled={emailChecking}
            >
              Забыли пароль?
            </Button>

            <Button 
              onClick={() => handleLogin()} 
              disabled={emailChecking}
              ref={buttonEmailRef}
            >
              Войти
            </Button>
          </>
        }

        {page === 'forget_password' && 
          <Button 
            onClick={() => {
              setPage('login')
              setError('')
            }} 
            type='text' 
            disabled={emailChecking}
          >
            Назад
          </Button>
        }

        {page === 'get_code' && 
          <Button 
            onClick={() => {
              setResendCodeTimeout(45)
              sendEmailToResetPassword(false)
            }} 
            type='text' 
            disabled={resendCodeTimeout}
            className={styles.position_relative}
          >
            <span className={styles.timer}>
              00:{resendCodeTimeout < 10 ? '0'+resendCodeTimeout : resendCodeTimeout}
            </span> 
            Отправить еще раз
          </Button>
        }

        {(page === 'forget_password' || page === 'get_code') && 
          <Button 
            onClick={() => {
              if (page === 'forget_password')
                sendEmailToResetPassword()
              else 
                handleCheckCode()
            }} 
            disabled={emailChecking}
            ref={buttonNextRef}
          >
            Далее
          </Button>
        }

        {page === 'change_password' && 
          <Button 
            onClick={() => {
              changePassword()
            }} 
            disabled={emailChecking}
            ref={buttonChangePasswordRef}
          >
            Сменить пароль
          </Button>
        }

      </Wrap>

    </div>
  )
}

export default LoginPanel
