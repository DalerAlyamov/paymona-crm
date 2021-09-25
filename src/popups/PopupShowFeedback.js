import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TextareaAutosize from 'react-textarea-autosize'
import API from '../API/API'
import { ArrowHadSmallBottom, Dot, Save } from '../icons'
import { DropDownInput, FooterPanelInPopup, TopPanelInPopup } from '../molecules'
import { Wrap } from '../organisms'
import { closePopup } from '../redux/actions/popupActions'
import { logouting } from '../redux/actions/userActions'
import styles from '../scss/popups/PopupShowFeedback.module.scss'

const PopupShowFeedback = ({
  className='',
  id=0,
  setParentData=()=>{}
}) => {


  /* Redux Hooks */

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  
  /* States */
  
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('')
  const [description, setDescription] = useState('')


  /* Functions */ 

  const handleSave = () => {
    const config = {
      url: 'feedback/patch/'+id,
      method: 'patch',
      headers: {
        'Authorization': 'Bearer ' + user.token
      },
      data: JSON.stringify([
        {
          patch: 'status',
          to: status
        }
      ])
    }
    API(config)
      .then(res => res.data)
      .then(_data => {
        setParentData(_data)
        dispatch(closePopup())
      })
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401 && user.status !== 'logouting') 
          dispatch(logouting())
      }) 
  }

  
  /* Effects */

  useEffect(() => {
    const config = {
      url: 'feedback/get/'+id,
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }
    API(config)
      .then(res => res.data)
      .then(res => setData(res))
      .catch(error => {
        if (!error || !error.response) return
        if (error.response.status === 401 && user.status !== 'logouting') 
          dispatch(logouting())
      }) 
  }, [id, dispatch, user])

  useEffect(() => {
    if (!data) return
    setDescription(data.content)
    setStatus(data.status)
  }, [data])


  /* Render */

  if (!data) return <></>
  return (
    <div className={classNames(className, styles.root)}>
      

      <TopPanelInPopup title='Отзыв' />


      <Wrap className={styles.wrap} flex column gap={24}>
        
        
        <Wrap flex spaceBetween>

          {/* Отправитель: */}
          <Wrap flex column gap={6}>


            <div className={styles.subtitle}>
              Отправитель:
            </div>


            <div className={styles.title}>
              {data.client}
            </div>


          </Wrap>


          {/* Продукт: */}
          <Wrap flex column gap={6}>


            <div className={styles.subtitle}>
              Продукт:
            </div>


            <div className={styles.title}>
              {data.product}
            </div>


          </Wrap>
          
          
          {/* Дата отправки: */}
          <Wrap flex column gap={6} justifyEnd>


            <div className={styles.subtitle}>
              Дата отправки:
            </div>


            <div className={styles.title}>
              {data.created_at}
            </div>


          </Wrap>


        </Wrap>


        <Wrap flex column gap={8}>


          <div className={styles.subtitle}>
            Статус
          </div>


          <DropDownInput
            id='1'
            defaultStatus
            width={240} 
            text={status} 
            arrow={<ArrowHadSmallBottom />}
          >
            <Menu 
              onClick={type => setStatus(type)}
              selectedType={status} 
            />
          </DropDownInput>


        </Wrap>

        
        <Wrap flex column gap={6}>


          <div className={styles.subtitle}>
            Заголовок
          </div>


          <div className={styles.title}>
            {data.title}
          </div>


        </Wrap>
        

        <Wrap flex column gap={6}>


          <div className={styles.subtitle}>
            Описание
          </div>


          <TextareaAutosize
            className={styles.textarea}
            minRows={9}
            maxRows={9}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />


        </Wrap>


        <Wrap flex wrap gap={16}>


          {data.files.map((file, index) => 
            <File 
              key={index} 
              file={file} 
            />
          )}


        </Wrap>


      </Wrap>
      

      <FooterPanelInPopup
        btn1='Сохранить'
        btn2='Отмена'
        onClick={() => handleSave()}
      />    


    </div>
  )
}

const File = ({
  file
}) => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = file.link;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <Wrap 
      autoWidth={false} 
      flex 
      spaceBetween 
      alignCenter 
      gap={12} 
      className={styles.file} 
      onClick={() => handleDownload()}
    >


      <div className={styles.file_icon}>
        
        <Save />

      </div>


      <Wrap flex column gap={4}>


        <div className={styles.file_title}>

          {file.filename}

        </div>


        <div className={styles.file_subtitle}>

          {file.size}

        </div>


      </Wrap>


    </Wrap>
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
        className={classNames(styles.dropdown_menu_item, selectedType === 'Не прочитано' && styles.dropdown_menu_item__active)} 
        onClick={() => onClick('Не прочитано')}
      >
        {selectedType === 'Не прочитано' &&
          <div className={styles.dropdown_menu_item__dot}>
            <Dot size={dotSize} />
          </div>
        }
        Не прочитано
      </button>
      <button 
        className={classNames(styles.dropdown_menu_item, selectedType === 'Прочитано' && styles.dropdown_menu_item__active)} 
        onClick={() => onClick('Прочитано')}
      >
        {selectedType === 'Прочитано' &&
          <div className={styles.dropdown_menu_item__dot}>
            <Dot size={dotSize} />
          </div>
        }
        Прочитано
      </button>
      <button 
        className={classNames(styles.dropdown_menu_item, selectedType === 'Решён' && styles.dropdown_menu_item__active)} 
        onClick={() => onClick('Решён')}
      >
        {selectedType === 'Решён' &&
          <div className={styles.dropdown_menu_item__dot}>
            <Dot size={dotSize} />
          </div>
        }
        Решён
      </button>
    </>
  )
}

export default PopupShowFeedback
