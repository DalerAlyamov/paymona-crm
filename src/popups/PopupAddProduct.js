import classNames from 'classnames'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import API from '../API/API'
import { ErrorText } from '../atoms'
import { AnimatedInput, FooterPanelInPopup, TopPanelInPopup } from '../molecules'
import { Wrap } from '../organisms'
import { closePopup } from '../redux/actions/popupActions'
import { logouting } from '../redux/actions/userActions'
import styles from '../scss/popups/PopupAddProduct.module.scss'

const PopupAddProduct = ({
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


  /* Functions */

  const checkValidation = () => {
    const errors = [] 

    if (name__inputValue.trim() === '') 
      errors.push({type: 'name', text: 'Введите название продукта'}) 

    setValidation_errors(errors)

    return !errors.length
  }

  const handleAddProduct = () => {

    if (!checkValidation())
      return

    const config = {
      url: 'service/create',
      method: 'post',
      headers: {
        'Authorization': 'Bearer ' + user.token
      },
      data: JSON.stringify({
        name: name__inputValue.trim()
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
        if (error.response.status === 401 && user.status !== 'logouting') 
          dispatch(logouting())
      })
  }


  /* Render */
  
  return (
    <div className={classNames(className, styles.root)}>

      <TopPanelInPopup title='Добавить продукт' />

      <Wrap flex column gap={24} className={styles.content}>

        <Wrap flex column gap={4}>
          <AnimatedInput
            autoWidth
            placeholder='Название продукта' 
            value={name__inputValue}
            setValue={setName__inputValue}
            initialFocusing={true}
            error={validation_errors.find(error => error.type === 'name')}
          />
          {validation_errors.find(error => error.type === 'name') &&
            <ErrorText>
              {validation_errors.find(error => error.type === 'name').text}
            </ErrorText>
          }
        </Wrap>

      </Wrap>

      <FooterPanelInPopup
        btn1='Добавить'
        btn2='Отмена'
        onClick={() => handleAddProduct()}
      />    
      
    </div>
  )
}

export default PopupAddProduct
