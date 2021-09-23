import classNames from 'classnames'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import API from '../API/API'
import { ErrorText } from '../atoms'
import { CheckBox, CheckBoxOutlineBlank } from '../icons'
import { AnimatedInput, DropDownInput, FooterPanelInPopup, TopPanelInPopup } from '../molecules'
import { Wrap } from '../organisms'
import { closePopup } from '../redux/actions/popupActions'
import { login, logout } from '../redux/actions/userActions'
import styles from '../scss/popups/PopupAddClient.module.scss'

const PopupAddClient = ({
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
  
  // domain
  const [domain__inputValue, setDomain__inputValue] = useState('') 
  const [domain__inputFocusing, setDomain__inputFocusing] = useState(false)
  
  // IP
  const [IP__inputValue, setIP__inputValue] = useState('') 
  const [IP__inputFocusing, setIP__inputFocusing] = useState(false)

  // selected products
  const [products__selected, setProducts__selected] = useState([])
  const [products__initialFocusing, setProducts__initialFocusing] = useState(false)


  /* Functions */
  
  const checkValidation = () => {
    const errors = [] 

    if (name__inputValue.trim() === '') 
      errors.push({type: 'name', text: 'Введите название клиента'}) 

    if (domain__inputValue.trim() === '') 
      errors.push({type: 'domain', text: 'Введите домен клиента'}) 

    if (IP__inputValue.trim() === '') 
      errors.push({type: 'ip', text: 'Введит ip-сервера клиента'}) 

    if (!products__selected.length) 
      errors.push({type: 'products', text: 'Выберите хотябы один продукт для клиента'})

    setValidation_errors(errors)

    return !errors.length
  }

  const handleAddClient = () => {

    if (!checkValidation())
      return

    const config = {
      url: 'employee/create/',
      method: 'post',
      headers: {
        'Authorization': 'Bearer ' + user.token
      },
      data: JSON.stringify({
        name: name__inputValue.trim(),
        domain_name: domain__inputValue.trim(),
        ip_address: IP__inputValue.trim(),
        logo: '',
        products: []
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

        if(error.response.status === 401) {
          dispatch(login({...user, status: 'logouting'}))
          setTimeout(() => {
            dispatch(logout())
          }, 1200)
        }
        
        if (error.response.data.message === 'Email already exists')
          errors.push({type: 'email', text: 'Пользователь с такой электронной почтой уже существует'}) 

        setValidation_errors(errors)
      })
  }


  /* Render */
  
  return (
    <div className={classNames(className, styles.root)}>

      <TopPanelInPopup title='Добавить клиента' />

      <Wrap flex column gap={24} className={styles.content}>

        {/********************* Name *********************/}
        <AnimatedInput
          autoWidth
          placeholder='Наименование' 
          value={name__inputValue}
          setValue={setName__inputValue}
          initialFocusing={true}
          error={validation_errors.find(error => error.type === 'name')}
          onKeyPress={e => {
            if (e.code === 'Enter')
              setDomain__inputFocusing(true)
          }}
        />
        {validation_errors.find(error => error.type === 'name') &&
          <ErrorText>
            {validation_errors.find(error => error.type === 'name').text}
          </ErrorText>
        }

        {/********************* Domain *********************/}
        <AnimatedInput
          autoWidth
          placeholder='Доменный адрес' 
          value={domain__inputValue}
          setValue={setDomain__inputValue}
          initialFocusing={domain__inputFocusing}
          error={validation_errors.find(error => error.type === 'domain')}
          onKeyPress={e => {
            if (e.code === 'Enter')
              setIP__inputFocusing(true)
          }}
        />
        {validation_errors.find(error => error.type === 'domain') &&
          <ErrorText>
            {validation_errors.find(error => error.type === 'domain').text}
          </ErrorText>
        }

        {/********************* IP *********************/}
        <AnimatedInput
          autoWidth
          placeholder='IP-сервера' 
          value={IP__inputValue}
          setValue={setIP__inputValue}
          initialFocusing={IP__inputFocusing}
          error={validation_errors.find(error => error.type === 'ip')}
          onKeyPress={e => {
            if (e.code === 'Enter')
              setProducts__initialFocusing(true)
          }}
        />
        {validation_errors.find(error => error.type === 'ip') &&
          <ErrorText>
            {validation_errors.find(error => error.type === 'ip').text}
          </ErrorText>
        }

        <DropDownInput
          id='1'
          text={
            products__selected.length ? 
            `(${products__selected.join(', ')})` : 
            `Выберите продукт`
          }
          initialOpening={products__initialFocusing}
          error={validation_errors.find(error => error.type === 'pproducts')}
          onClose={() => setProducts__initialFocusing(false)}
          autoWidth
          active={products__selected !== ''}
        >
          <Menu 
            onClick={type => {
              if (products__selected.includes(type))
                setProducts__selected(products__selected.filter(product => product !== type))
              else
                setProducts__selected([...products__selected, type]
            )}}
            products__selected={products__selected} 
          />
        </DropDownInput>
        {validation_errors.find(error => error.type === 'products') &&
          <ErrorText>
            {validation_errors.find(error => error.type === 'pproducts').text}
          </ErrorText>
        }

      </Wrap>

      <FooterPanelInPopup
        btn1='Добавить'
        btn2='Отмена'
        onClick={() => handleAddClient()}
      />    
      
    </div>
  )
}

const Menu = ({
  onClick=()=>{},
  products__selected=()=>{}
}) => {

  const productsList = ['paymona poll', 'paymona bi', 'paymona officess', 'paymona ml']

  return (
    <>
      {productsList.map(product => 
        <button 
          key={product}
          className={classNames(
            styles.dropdown_menu_item, 
            products__selected.includes(product) && styles.dropdown_menu_item__active
          )} 
          onClick={() => onClick(product)}
        >
          <div className={styles.dropdown_menu_item__checkbox}>
            {products__selected.includes(product) ?
              <CheckBox size={20} /> : <CheckBoxOutlineBlank size={20} />
            }
          </div>
          {product}
        </button>
      )}
    </>
  )
}

export default PopupAddClient
