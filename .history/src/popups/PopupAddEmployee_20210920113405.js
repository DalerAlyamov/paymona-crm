import React, { useState } from 'react'
import styles from '../scss/popups/PopupAddEmployee.module.scss'
import { AnimatedInput, DropDownInput } from '../molecules'
import { Wrap } from '../organisms'
import classNames from 'classnames'
import { Dot } from '../icons'
import { useDispatch } from 'react-redux'
import FooterPanelInPopup from '../molecules/FooterPanelInPopup'
import TopPanelInPopup from '../molecules/TopPanelInPopup'

const PopupAddEmployee = ({
  className
}) => {

  //redux
  const dispatch = useDispatch()
  

  /* States */
  
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
  const [userType__selected, setUserType__selected] = useState('Employer')
  const [userType__initialFocusing, setUserType__initialFocusing] = useState(false)
  

  /* Render */
  
  return (
    <div className={classNames(className, styles.root)}>

        <TopPanelInPopup/>

      <div className={styles.survey}>

        <Wrap
          flex
          gap={30}
        >  
          <AnimatedInput
            placeholder='Имя' 
            width={240} 
            value={name__inputValue}
            setValue={setName__inputValue}
            initialFocusing={true}
            onKeyPress={e => {
              if (e.code === 'Enter')
                setLastName__inputFocusing(true)
            }}
          />
          <AnimatedInput
            placeholder='Фамилия' 
            width={240} 
            value={lastName__inputValue}
            setValue={setLastName__inputValue}
            initialFocusing={lastName__inputFocusing}
            onKeyPress={e => {
              if (e.code === 'Enter')
                setMail__inputFocusing(true)
            }}
            onBlur={() => setLastName__inputFocusing(false)}
          />
        </Wrap>

        <Wrap>
          <AnimatedInput
            placeholder='Электронная почта' 
            autoWidth
            suffix='@paymona.com'
            value={mail__inputValue}
            setValue={setMail__inputValue}
            initialFocusing={mail__inputFocusing}
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

        <Wrap
          flex
          gap={30}
        >  
          <AnimatedInput
            placeholder='Отдел' 
            width={240} 
            value={department__inputValue}
            setValue={setDepartment__inputValue}
            initialFocusing={department__inputFocusing}
            onKeyPress={e => {
              if (e.code === 'Enter')
                setPosition__inputFocusing(true)
            }}
            onBlur={() => setDepartment__inputFocusing(false)}
          />
          <AnimatedInput
            placeholder='Должность' 
            width={240}  
            value={position__inputValue}
            setValue={setPosition__inputValue} 
            initialFocusing={position__inputFocusing}
            onKeyPress={e => {
              if (e.code === 'Enter')
                setUserType__initialFocusing(true)
            }}
            onBlur={() => setPosition__inputFocusing(false)}
          />
        </Wrap>

        <DropDownInput
          id='1'
          text={`Выберите тип прав (${userType__selected})`}
          initialOpening={userType__initialFocusing}
          onClose={() => setUserType__initialFocusing(false)}
          autoWidth
        >
          <Menu 
            onClick={type => setUserType__selected(type)}
            selectedType={userType__selected} 
          />
        </DropDownInput>

      </div>

        <FooterPanelInPopup/>    
            
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
