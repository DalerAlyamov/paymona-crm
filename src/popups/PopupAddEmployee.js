import React, { useState } from 'react'
import styles from '../scss/popups/PopupAddEmployee.module.scss'
import { AnimatedInput, DropDownInput } from '../molecules'
import { Wrap } from '../organisms'
import { ErrorText } from '../atoms'
import classNames from 'classnames'
import { Dot } from '../icons'
import FooterPanelInPopup from '../molecules/FooterPanelInPopup'
import TopPanelInPopup from '../molecules/TopPanelInPopup'

const PopupAddEmployee = ({
  className
}) => {
  

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
    const erros = [] 

    if (name__inputValue.trim() === '') 
      erros.push('name') // Введите имя пользователя

    if (lastName__inputValue.trim() === '') 
      erros.push('surname') // Введите фамилию пользователя

    if (mail__inputValue.trim() === '') 
      erros.push('email') // Введит электронная почту пользователя

    if (department__inputValue.trim() === '') 
      erros.push('department') // Введите отдел пользователя

    if (position__inputValue.trim() === '') 
      erros.push('position') // Введите должность пользователя

    if (userType__selected.trim() === '') 
      erros.push('type') // Выберите тип пользователя

    setValidation_errors(erros)

    return !erros.length
  }

  const handleAddEmployee = () => {

    if (!checkValidation())
      return

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
              error={validation_errors.find(error => error === 'name')}
              onKeyPress={e => {
                if (e.code === 'Enter')
                  setLastName__inputFocusing(true)
              }}
            />
            {validation_errors.find(error => error === 'name') &&
              <ErrorText>
                Введите имя пользователя
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
              error={validation_errors.find(error => error === 'surname')}
              onKeyPress={e => {
                if (e.code === 'Enter')
                  setMail__inputFocusing(true)
              }}
              onBlur={() => setLastName__inputFocusing(false)}
            />
            {validation_errors.find(error => error === 'surname') &&
              <ErrorText>
                Введите фамилию пользователя
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
              error={validation_errors.find(error => error === 'email')}
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
          {validation_errors.find(error => error === 'email') &&
            <ErrorText>
              Введит электронная почту пользователя
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
              error={validation_errors.find(error => error === 'department')}
              onKeyPress={e => {
                if (e.code === 'Enter')
                  setPosition__inputFocusing(true)
              }}
              onBlur={() => setDepartment__inputFocusing(false)}
            />
            {validation_errors.find(error => error === 'department') &&
              <ErrorText>
                Введите отдел пользователя
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
              error={validation_errors.find(error => error === 'position')}
              onKeyPress={e => {
                if (e.code === 'Enter')
                  setUserType__initialFocusing(true)
              }}
              onBlur={() => setPosition__inputFocusing(false)}
            />
            {validation_errors.find(error => error === 'position') &&
              <ErrorText>
                Введите должность пользователя
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
          error={validation_errors.find(error => error === 'type')}
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
        className={classNames(styles.dropdown_menu_item, selectedType === 'Sales' && styles.dropdown_menu_item__active)} 
        onClick={() => onClick('Sales')}
      >
        {selectedType === 'Sales' &&
          <div className={styles.dropdown_menu_item__dot}>
            <Dot size={dotSize} />
          </div>
        }
        Sales
      </button>
      <button 
        className={classNames(styles.dropdown_menu_item, selectedType === 'Teamlead' && styles.dropdown_menu_item__active)} 
        onClick={() => onClick('Teamlead')}
      >
        {selectedType === 'Teamlead' &&
          <div className={styles.dropdown_menu_item__dot}>
            <Dot size={dotSize} />
          </div>
        }
        Teamlead
      </button>
      <button 
        className={classNames(styles.dropdown_menu_item, selectedType === 'Employer' && styles.dropdown_menu_item__active)} 
        onClick={() => onClick('Employer')}
      >
        {selectedType === 'Employer' &&
          <div className={styles.dropdown_menu_item__dot}>
            <Dot size={dotSize} />
          </div>
        }
        Employer
      </button>
    </>
  )
}

export default PopupAddEmployee
