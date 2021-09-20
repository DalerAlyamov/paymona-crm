import classNames from 'classnames'
import React, { useState } from 'react'
import { AnimatedInput } from '../molecules'
import FooterPanelInPopup from '../molecules/FooterPanelInPopup'
import TopPanelInPopup from '../molecules/TopPanelInPopup'
import { Wrap } from '../organisms'
import styles from '../scss/popups/PopupEdit.module.scss'
const PopupEditEmployee = ({
  className
}) => {

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
  


  return (
    <div className={classNames(className, styles.root)}>
      <TopPanelInPopup
        title='Редактировать сотрудника'
      />

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

      </div>
      <FooterPanelInPopup
        btn1='Сохранить'
        btn2='Отмена'
      />

    </div>
  )
}

export default PopupEditEmployee
