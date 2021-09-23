import React, { useEffect, useState } from 'react'
import styles from '../scss/popups/PopupEditEmployee.module.scss'
import { Wrap } from '../organisms'
import { ErrorText } from '../atoms'
import classNames from 'classnames'
import { Dot } from '../icons'
import { AnimatedInput, DropDownInput, FooterPanelInPopup, TopPanelInPopup } from '../molecules'
import { useDispatch, useSelector } from 'react-redux'
import API from '../API/API'
import { closePopup } from '../redux/actions/popupActions'
import { login, logout } from '../redux/actions/userActions'

const PopupEditEmployee = ({
  className='',
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
  
  // lastName
  const [lastName__inputValue, setLastName__inputValue] = useState('')
  const [lastName__inputFocusing, setLastName__inputFocusing] = useState(false)
  
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

    if (department__inputValue.trim() === '') 
      errors.push({type: 'department', text: 'Введите отдел пользователя'})

    if (position__inputValue.trim() === '') 
      errors.push({type: 'position', text: 'Введите должность пользователя'})

    if (userType__selected.trim() === '') 
    errors.push({type: 'type', text: 'Выберите тип пользователя'}) 

    setValidation_errors(errors)

    return !errors.length
  }

  const handleEditEmployee = () => {

    if (!checkValidation())
      return

    const config = {
      url: 'employee/patch/'+id,
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
          to: lastName__inputValue.trim()
        },
        {
          patch: 'department',
          to: department__inputValue.trim()
        },
        {
          patch: 'position',
          to: position__inputValue.trim()
        },
        {
          patch: 'type',
          to: userType__selected.trim()
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
        
        if (!error) return

        if(error.response.status === 401) {
          dispatch(login({...user, status: 'logouting'}))
          setTimeout(() => {
            dispatch(logout())
          }, 1200)
        }
      })
  }


  /* UseEffects */


  useEffect(() => {
    const config = {
      method: 'get',
      url: 'employee/get/'+id,
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }
    API(config)
      .then(res => res.data)
      .then(res => {
        setName__inputValue(res.name)
        setLastName__inputValue(res.surname)
        setDepartment__inputValue(res.department)
        setPosition__inputValue(res.position)
        setUserType__selected(res.type)
      })
      .catch(error => {
        if (!error.response) return
        if(error.response.status === 401) {
          dispatch(login({...user, status: 'logouting'}))
          setTimeout(() => {
            dispatch(logout())
          }, 1200)
        }
      })
  }, [id, dispatch, user])


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
                  setDepartment__inputFocusing(true)
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
        btn1='Изменить'
        btn2='Отмена'
        onClick={() => handleEditEmployee()}
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

export default PopupEditEmployee
