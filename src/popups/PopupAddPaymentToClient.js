import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import API from '../API/API'
import { Button, ErrorText } from '../atoms'
import { Add, ArrowHadSmallBottom, Dot } from '../icons'
import { AnimatedInput, FooterPanelInPopup, TopPanelInPopup } from '../molecules'
import DropdownInput from '../molecules/DropDownInput'
import { Wrap } from '../organisms'
import { closePopup } from '../redux/actions/popupActions'
import { logouting } from '../redux/actions/userActions'
import styles from '../scss/popups/PopupAddPaymentToClient.module.scss'

const PopupAddPaymentToClient = ({
  className='',
  id,
  setData=()=>{}
}) => {
  

  /* Redux Hooks */

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  

  /* States */
  
  // name
  const [payments, setPayments] = useState([
    {
      amount: '1000',
      product: '',
      errorText: ''
    }
  ])


  /* Functions */

  const checkValidation = () => {
    let hasErrors = false 

    payments.forEach((payment, index) => {
      if (payment.amount === '' || payment.product === '') {
        hasErrors = true
        setPayments(prev => {
          const next = prev.concat()

          next.forEach((_payment, _index) => {
            if (_index === index && payment.product === '')
              payment.errorText = 'Выберите продукт для подписки'
          })

          return next
        })
      }
    })

    return !hasErrors
  }

  const handleSavePayment = async () => {

    if (!checkValidation())
      return

    for (let payment of payments) {
      const config = {
        url: 'client/payment/'+id+'/create',
        method: 'post',
        headers: {
          'Authorization': 'Bearer ' + user.token
        },
        data: JSON.stringify({
          amount: payment.amount,
          product: payment.product
        })
      }
  
      await API(config)
        .then(res => res.data)
        .then(data => {
          setData(data)
        })
        .catch(error => {
          if (!error || !error.response) return
          if (error.response.status === 401 && user.status !== 'logouting') 
            dispatch(logouting())
        })
    }

    dispatch(closePopup())
  }

  const handleAddPayment = () => {
    setPayments([...payments, {
      amount: '1000',
      product: '',
      errorText: ''
    }])
  }


  /* Render */
  
  return (
    <div className={classNames(className, styles.root)}>

      <TopPanelInPopup title='Провести оплату' />

      <Wrap flex column gap={18} className={styles.content}>

        {payments.map((payment, index) => 
          <Wrap flex column gap={8} key={index}>
            <Wrap flex gap={24}>
              <DropdownInput 
                id={index}
                arrow={<ArrowHadSmallBottom />}
                text={payment.product !== '' ? payment.product : 'Выберите услугу'}
                active={payment.product !== ''}
              >
                <Menu 
                  onClick={product => setPayments(prev => {
                    const next = prev.concat()
                    next.forEach((_payment, _index) => {
                      if (_index === index) {
                        _payment.product = product
                        _payment.errorText = ''
                      }
                    })
                    return next
                  })}
                  products__selected={payment.product}
                />
              </DropdownInput>
              <AnimatedInput
                autoWidth
                placeholder='Сумма оплаты' 
                value={payment.amount}
                setValue={value => setPayments(prev => {
                  const next = prev.concat()
                  next.forEach((_payment, _index) => {
                    if (_index === index && !isNaN(value)) {
                      _payment.amount = value
                      _payment.errorText = ''
                    }
                  })
                  return next
                })}
                suffix='$'
                initialFocusing={true}
                error={payment.errorText !== ''}
              />
            </Wrap>
            {payment.errorText !== '' &&
              <ErrorText>
                {payment.errorText}
              </ErrorText>
            }
          </Wrap>  
        )}

        <Button type='text' beforeIcon={<Add />} onClick={() => handleAddPayment()}>
          Добавить услугу
        </Button>

      </Wrap>

      <FooterPanelInPopup
        btn1='Добавить'
        btn2='Отмена'
        onClick={() => handleSavePayment()}
      />    
      
    </div>
  )
}

const Menu = ({
  onClick=()=>{},
  products__selected=''
}) => {

  const dotSize = 14

  const [productsList, setProductsList] = useState([])
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()


  useEffect(() => {
    API({
      url: 'service/getlist',
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + user.token
      },
    })
      .then(res => res.data)
      .then(data => setProductsList(data))
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401 && user.status !== 'logouting') 
          dispatch(logouting())
      })
  }, [user, dispatch])

  return (
    <>
      {productsList.map(product => 
        <button 
          key={product}
          className={classNames(
            styles.dropdown_menu_item, 
            products__selected === product && styles.dropdown_menu_item__active
          )} 
          onClick={() => onClick(product)}
        >
          {products__selected === product &&
            <div className={styles.dropdown_menu_item__dot}>
              <Dot size={dotSize} />
            </div>
          }
          {product}
        </button>
      )}
    </>
  )
}

export default PopupAddPaymentToClient
