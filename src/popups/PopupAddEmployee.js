import React, { useState } from 'react'
import styles from '../scss/popups/PopupAddEmployee.module.scss'
import { AnimatedInput, DropDownInput } from '../molecules'
import { Wrap } from '../organisms'
import { ErrorText } from '../atoms'
import classNames from 'classnames'
import { Dot } from '../icons'
import FooterPanelInPopup from '../molecules/FooterPanelInPopup'
import TopPanelInPopup from '../molecules/TopPanelInPopup'
import { useDispatch, useSelector } from 'react-redux'
import API from '../API/API'
import { closePopup } from '../redux/actions/popupActions'

const PopupAddEmployee = ({
  className='',
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
  
  // lastName
  const [lastName__inputValue, setLastName__inputValue] = useState('')
  const [lastName__inputFocusing, setLastName__inputFocusing] = useState(false)
  
  // mail
  const [mail__inputValue, setMail__inputValue] = useState('') 
  const [mail__inputFocusing, setMail__inputFocusing] = useState(false)
  
  // department
  const [department__inputValue, setDepartment__inputValue] = useState('') 
  const [department__inputFocusing, setDepartment__inputFocusing] = useState(false)
  
  // position
  const [position__inputValue, setPosition__inputValue] = useState('') 
  const [position__inputFocusing, setPosition__inputFocusing] = useState(false)

  // dropdown
  const [userType__selected, setUserType__selected] = useState('')
  const [userType__initialFocusing, setUserType__initialFocusing] = useState(false)
  

  /* Functions */
  
  const checkValidation = () => {
    const errors = [] 

    if (name__inputValue.trim() === '') 
      errors.push({type: 'name', text: 'Введите имя пользователя'}) 

    if (lastName__inputValue.trim() === '') 
      errors.push({type: 'surname', text: 'Введите фамилию пользователя'}) 

    if (mail__inputValue.trim() === '') 
      errors.push({type: 'email', text: 'Введит электронная почту пользователя'}) 

    if (department__inputValue.trim() === '') 
      errors.push({type: 'department', text: 'Введите отдел пользователя'})

    if (position__inputValue.trim() === '') 
      errors.push({type: 'position', text: 'Введите должность пользователя'})

    if (userType__selected.trim() === '') 
    errors.push({type: 'type', text: 'Выберите тип пользователя'}) 

    setValidation_errors(errors)

    return !errors.length
  }

  const handleAddEmployee = () => {

    if (!checkValidation())
      return

    const config = {
      url: 'employee/create/',
      method: 'post',
      headers: {
        'Authorization': 'Bearer ' + user.token
      },
      data: JSON.stringify({
        email: mail__inputValue.trim().replaceAll('@paymona.com', '')+'@paymona.com',
        name: name__inputValue.trim(),
        surname: lastName__inputValue.trim(),
        department: department__inputValue.trim(),
        position: position__inputValue.trim(),
        type: userType__selected.trim()
      })
    }

    API(config)
      .then(res => res.data)
      .then(data => {
        setData(data)
        dispatch(closePopup())
      })
      .catch(error => {
        const errors = []
        
        if (error.response.data.message === 'Email already exists')
          errors.push({type: 'email', text: 'Пользователь с такой электронной почтой уже существует'}) 

        setValidation_errors(errors)
      })
  }


  /* Render */
  
  return (
    <div className={classNames(className, styles.root)}>

      <TopPanelInPopup
        title='Добавить сотрудника'
      />

      <div className={styles.survey}>

        <Wrap
          flex
          gap={30}
        >  
          <Wrap flex column gap={4}>
            <AnimatedInput
              placeholder='Имя' 
              width={240} 
              value={name__inputValue}
              setValue={setName__inputValue}
              initialFocusing={true}
              error={validation_errors.find(error => error.type === 'name')}
              onKeyPress={e => {
                if (e.code === 'Enter')
                  setLastName__inputFocusing(true)
              }}
            />
            {validation_errors.find(error => error.type === 'name') &&
              <ErrorText>
                {validation_errors.find(error => error.type === 'name').text}
              </ErrorText>
            }
          </Wrap>
          
          <Wrap flex column gap={4}>
            <AnimatedInput
              placeholder='Фамилия' 
              width={240} 
              value={lastName__inputValue}
              setValue={setLastName__inputValue}
              initialFocusing={lastName__inputFocusing}
              error={validation_errors.find(error => error.type === 'surname')}
              onKeyPress={e => {
                if (e.code === 'Enter')
                  setMail__inputFocusing(true)
              }}
              onBlur={() => setLastName__inputFocusing(false)}
            />
            {validation_errors.find(error => error.type === 'surname') &&
              <ErrorText>
                {validation_errors.find(error => error.type === 'surname').text}
              </ErrorText>
            }
          </Wrap>
        </Wrap>

        <Wrap flex column gap={4}>

          <Wrap>
            <AnimatedInput
              placeholder='Электронная почта' 
              autoWidth
              suffix='@paymona.com'
              value={mail__inputValue}
              setValue={setMail__inputValue}
              initialFocusing={mail__inputFocusing}
              error={validation_errors.find(error => error.type === 'email')}
              onKeyPress={e => {
                if (e.code === 'Enter')
                  setDepartment__inputFocusing(true)
              }}
              onBlur={() => setMail__inputFocusing(false)}
            />
            <span className={styles.desc}>
            *Это будет логином пользователя
            </span>
          </Wrap>
          {validation_errors.find(error => error.type === 'email') &&
            <ErrorText>
              {validation_errors.find(error => error.type === 'email').text}
            </ErrorText>
          }
        </Wrap>

        <Wrap flex gap={30}>  

          <Wrap flex column gap={4}>
            <AnimatedInput
              placeholder='Отдел' 
              width={240} 
              value={department__inputValue}
              setValue={setDepartment__inputValue}
              initialFocusing={department__inputFocusing}
              error={validation_errors.find(error => error.type === 'department')}
              onKeyPress={e => {
                if (e.code === 'Enter')
                  setPosition__inputFocusing(true)
              }}
              onBlur={() => setDepartment__inputFocusing(false)}
            />
            {validation_errors.find(error => error.type === 'department') &&
              <ErrorText>
                {validation_errors.find(error => error.type === 'department').text}
              </ErrorText>
            }
          </Wrap>

          <Wrap flex column gap={4}>
            <AnimatedInput
              placeholder='Должность' 
              width={240}  
              value={position__inputValue}
              setValue={setPosition__inputValue} 
              initialFocusing={position__inputFocusing}
              error={validation_errors.find(error => error.type === 'position')}
              onKeyPress={e => {
                if (e.code === 'Enter')
                  setUserType__initialFocusing(true)
              }}
              onBlur={() => setPosition__inputFocusing(false)}
            />
            {validation_errors.find(error => error.type === 'position') &&
              <ErrorText>
                {validation_errors.find(error => error.type === 'position').text}
              </ErrorText>
            }
          </Wrap>

        </Wrap>

        <DropDownInput
          id='1'
          text={
            userType__selected !== '' ? 
            `Тип прав: ${userType__selected}` : 
            `Выберите тип прав`
          }
          initialOpening={userType__initialFocusing}
          error={validation_errors.find(error => error.type === 'type')}
          onClose={() => setUserType__initialFocusing(false)}
          autoWidth
          active={userType__selected !== ''}
        >
          <Menu 
            onClick={type => setUserType__selected(type)}
            selectedType={userType__selected} 
          />
        </DropDownInput>

      </div>

      <FooterPanelInPopup
        btn1='Добавить'
        btn2='Отмена'
        onClick={() => handleAddEmployee('hello')}
      />    
            
    </div>
  )
}

const Menu = ({
  onClick=()=>{},
  selectedType=()=>{}
}) => {

  const dotSize = 14

  return (
    <>
      <button 
        className={classNames(styles.dropdown_menu_item, selectedType === 'sales' && styles.dropdown_menu_item__active)} 
        onClick={() => onClick('sales')}
      >
        {selectedType === 'sales' &&
          <div className={styles.dropdown_menu_item__dot}>
            <Dot size={dotSize} />
          </div>
        }
        sales
      </button>
      <button 
        className={classNames(styles.dropdown_menu_item, selectedType === 'teamlead' && styles.dropdown_menu_item__active)} 
        onClick={() => onClick('teamlead')}
      >
        {selectedType === 'teamlead' &&
          <div className={styles.dropdown_menu_item__dot}>
            <Dot size={dotSize} />
          </div>
        }
        teamlead
      </button>
      <button 
        className={classNames(styles.dropdown_menu_item, selectedType === 'employee' && styles.dropdown_menu_item__active)} 
        onClick={() => onClick('employee')}
      >
        {selectedType === 'employee' &&
          <div className={styles.dropdown_menu_item__dot}>
            <Dot size={dotSize} />
          </div>
        }
        employee
      </button>
    </>
  )
}

export default PopupAddEmployee
