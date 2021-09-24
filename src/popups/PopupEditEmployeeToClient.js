import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import API from '../API/API'
import { ErrorText } from '../atoms'
import { ArrowHadSmallBottom, CheckBox, CheckBoxOutlineBlank } from '../icons'
import { AnimatedInput, DropDownInput, FooterPanelInPopup, TopPanelInPopup } from '../molecules'
import { Wrap } from '../organisms'
import { closePopup } from '../redux/actions/popupActions'
import { login } from '../redux/actions/userActions'
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

  // selected products
  const [products__selected, setProducts__selected] = useState([])
  const [products__initialFocusing, setProducts__initialFocusing] = useState(false)


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
        setEmail__inputValue(data.email)
      })
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401) 
          dispatch(login({...user, status: 'logouting'}))
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

    if (!products__selected.length) 
      errors.push({type: 'products', text: 'Выберите хотябы один продукт для клиента'})

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
        email: email__inputValue.trim(),
        products: products__selected
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
          dispatch(login({...user, status: 'logouting'}))
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
            onKeyPress={e => {
              if (e.code === 'Enter')
                setProducts__initialFocusing(true)
            }}
          />
          {validation_errors.find(error => error.type === 'email') &&
            <ErrorText>
              {validation_errors.find(error => error.type === 'email').text}
            </ErrorText>
          }
        </Wrap>

        {/********************* Products *********************/}
        <Wrap flex column gap={4}>
          <DropDownInput
            id='1'
            autoWidth
            arrow={<ArrowHadSmallBottom />}
            closeWhenClickMenu={false}
            text={
              <>
                {products__selected.length ? 
                `(${products__selected.join(', ')})` : 
                `Выберите продукт`}
              </>
            }
            initialOpening={products__initialFocusing}
            error={validation_errors.find(error => error.type === 'products') && !products__selected.length}
            onClose={() => setProducts__initialFocusing(false)}
            active={products__selected.length}
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
          {validation_errors.find(error => error.type === 'products') && !products__selected.length &&
            <ErrorText>
              {validation_errors.find(error => error.type === 'products').text}
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

const Menu = ({
  onClick=()=>{},
  products__selected=()=>{}
}) => {

  const productsList = ['Офисы', 'Опросы', 'Аналитика']

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

export default PopupEditEmployeeToClient
