import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { DropdownInputLabel, DropdownInputMenu } from '../atoms'
import { Wrap } from '../organisms'
import styles from '../scss/molecules/DropDownInput.module.scss'

const DropdownInput = ({
  id='',
  className='',
  text='',
  children=<></>,
  width=380,
  autoWidth=false,
  initialOpening=false,
  onClick=() => {},
  onClose=()=>{},
  onOpen=()=>{}
}) => {

  const [open, setOpen] = useState(initialOpening)

  useEffect(() => {
    setOpen(initialOpening)
  }, [initialOpening])

  useEffect(() => {
    const handleWindowClick = e => {
      if (e.target.closest('.'+styles.wrap)) {
        setOpen(false)
        onClose()
      }
      else if (!e.target.closest('#DropdownInput-'+id)) {
        setOpen(false)
        onClose()
      }
    }
    window.addEventListener('click', handleWindowClick)
    return () => window.removeEventListener('click', handleWindowClick)
  }, [id, onClose])

  return (
    <div
      style={{ width: autoWidth ? '100%' : width+'px' }} 
      className={classNames(className, styles.root)} 
      id={'DropdownInput-'+id}
    >

      <DropdownInputLabel 
        onClick={() => {
          if (open)
            onClose()
          else
            onOpen()
          setOpen(!open)
          onClick={onClick}
        }} 
        active={open}
      >
        {text}
      </DropdownInputLabel>

      {open &&
        <DropdownInputMenu>
          <Wrap className={styles.wrap}>
            {children}
          </Wrap>
        </DropdownInputMenu>
      }

    </div>
  )
}

export default DropdownInput
