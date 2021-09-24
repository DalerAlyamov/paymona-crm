import classNames from 'classnames'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import API from '../API/API'
import { ErrorText } from '../atoms'
import { AnimatedInput, FooterPanelInPopup, TopPanelInPopup } from '../molecules'
import { Wrap } from '../organisms'
import { closePopup } from '../redux/actions/popupActions'
import { logouting } from '../redux/actions/userActions'
import styles from '../scss/popups/PopupAddEmployeeToClient.module.scss'

const PopupAddEmployeeToClient = ({
  className='',
  id,
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

  const handleAddClientEmployee = () => {

    if (!checkValidation())
      return

    const config = {
      url: 'client/employee/'+id+'/create',
      method: 'post',
      headers: {
        'Authorization': 'Bearer ' + user.token
      },
      data: JSON.stringify({
        name: name__inputValue.trim(),
        surname: surname__inputValue.trim(),
        email: email__inputValue.trim()
      })
    }

    API(config)
      .then(res => res.data)
      .then(data => {
        setData(data)
        dispatch(closePopup())
      })
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401) 
          dispatch(logouting())
      })
  }


  /* Render */
  
  return (
    <div className={classNames(className, styles.root)}>

      <TopPanelInPopup title='Добавить пользователя' />

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
        btn1='Добавить'
        btn2='Отмена'
        onClick={() => handleAddClientEmployee()}
      />    
      
    </div>
  )
}

export default PopupAddEmployeeToClient
