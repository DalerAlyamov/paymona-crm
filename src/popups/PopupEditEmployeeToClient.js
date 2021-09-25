import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import API from '../API/API'
import { ErrorText } from '../atoms'
import { AnimatedInput, FooterPanelInPopup, TopPanelInPopup } from '../molecules'
import { Wrap } from '../organisms'
import { closePopup } from '../redux/actions/popupActions'
import { logouting } from '../redux/actions/userActions'
import styles from '../scss/popups/PopupEditEmployeeToClient.module.scss'

const PopupEditEmployeeToClient = ({
  className='',
  clientId=0,
  id=0,
  setData=()=>{}
}) => {
  

  /* Redux Hooks */

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  

  /* States */
  
  // ValidationErrors
  const [validation_errors, setValidation_errors] = useState([])
  
  // name
  const [name__inputValue, setName__inputValue] = useState('')
  
  // Surname
  const [surname__inputValue, setSurname__inputValue] = useState('') 
  const [surname__inputFocusing, setSurname__inputFocusing] = useState(false)
  
  // Email
  const [email__inputValue, setEmail__inputValue] = useState('') 
  const [email__inputFocusing, setEmail__inputFocusing] = useState(false)


  /* Effects */

  useEffect(() => {

    const config = {
      url: 'client/employee/'+clientId+'/get/'+id,
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }

    API(config)
      .then(res => res.data)
      .then(data => {
        setName__inputValue(data.name)
        setSurname__inputValue(data.surname)
        setEmail__inputValue(data.email)
      })
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401 && user.status !== 'logouting') 
          dispatch(logouting())
      })

  }, [id, clientId, user, dispatch])


  /* Functions */

  const checkValidation = () => {
    const errors = [] 

    if (name__inputValue.trim() === '') 
      errors.push({type: 'name', text: 'Введите название пользователя'}) 

    if (surname__inputValue.trim() === '') 
      errors.push({type: 'domain', text: 'Введите фамилию пользователя'}) 

    if (email__inputValue.trim() === '') 
      errors.push({type: 'ip', text: 'Введит почту пользователя'}) 

    setValidation_errors(errors)

    return !errors.length
  }

  const handleEditClientEmployee = () => {

    if (!checkValidation())
      return

    const config = {
      url: 'client/employee/'+clientId+'/patch/'+id,
      method: 'patch',
      headers: {
        'Authorization': 'Bearer ' + user.token
      },
      data: JSON.stringify([
        {
          patch: 'name',
          to: name__inputValue.trim()
        },
        {
          patch: 'surname',
          to: surname__inputValue.trim()
        },
        {
          patch: 'email',
          to: email__inputValue.trim()
        }
      ])
    }

    API(config)
      .then(res => res.data)
      .then(data => {
        setData(data)
        dispatch(closePopup())
      })
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401 && user.status !== 'logouting') 
          dispatch(logouting())
      })
  }


  /* Render */
  
  return (
    <div className={classNames(className, styles.root)}>

      <TopPanelInPopup title='Редактировать пользователя' />

      <Wrap flex column gap={24} className={styles.content}>

        {/********************* Name *********************/}
        <Wrap flex column gap={4}>
          <AnimatedInput
            autoWidth
            placeholder='Имя' 
            value={name__inputValue}
            setValue={setName__inputValue}
            initialFocusing={true}
            error={validation_errors.find(error => error.type === 'name')}
            onKeyPress={e => {
              if (e.code === 'Enter')
                setSurname__inputFocusing(true)
            }}
          />
          {validation_errors.find(error => error.type === 'name') &&
            <ErrorText>
              {validation_errors.find(error => error.type === 'name').text}
            </ErrorText>
          }
        </Wrap>

        {/********************* Surname *********************/}
        <Wrap flex column gap={4}>
          <AnimatedInput
            autoWidth
            placeholder='Фамилия' 
            value={surname__inputValue}
            setValue={setSurname__inputValue}
            initialFocusing={surname__inputFocusing}
            error={validation_errors.find(error => error.type === 'surname')}
            onKeyPress={e => {
              if (e.code === 'Enter')
                setEmail__inputFocusing(true)
            }}
          />
          {validation_errors.find(error => error.type === 'surname') &&
            <ErrorText>
              {validation_errors.find(error => error.type === 'surname').text}
            </ErrorText>
          }
        </Wrap>

        {/********************* Email *********************/}
        <Wrap flex column gap={4}>
          <AnimatedInput
            autoWidth
            placeholder='Электронная почта' 
            value={email__inputValue}
            setValue={setEmail__inputValue}
            initialFocusing={email__inputFocusing}
            error={validation_errors.find(error => error.type === 'email')}
          />
          {validation_errors.find(error => error.type === 'email') &&
            <ErrorText>
              {validation_errors.find(error => error.type === 'email').text}
            </ErrorText>
          }
        </Wrap>

      </Wrap>

      <FooterPanelInPopup
        btn1='Редактировать'
        btn2='Отмена'
        onClick={() => handleEditClientEmployee()}
      />    
      
    </div>
  )
}

export default PopupEditEmployeeToClient
