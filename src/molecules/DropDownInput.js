import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { DropdownInputLabel, DropdownInputMenu } from '../atoms'
import styles from '../scss/molecules/DropdownInput.module.scss'

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
    if (open)
      onOpen()
    else
      onClose()
  }, [open, onOpen, onClose])

  useEffect(() => {
    const handleWindowClick = e => {
      if (!e.target.closest('#DropdownInput-'+id))
        setOpen(false)
    }
    window.addEventListener('click', handleWindowClick)
    return () => window.removeEventListener('click', handleWindowClick)
  }, [id])

  return (
    <div
      style={{ width: autoWidth ? '100%' : width+'px' }} 
      className={classNames(className, styles.root)} 
      id={'DropdownInput-'+id}
    >

      <DropdownInputLabel 
        onClick={() => {
          setOpen(!open)
          onClick={onClick}
        }} 
        active={open}
      >
        {text}
      </DropdownInputLabel>

      {open &&
        <DropdownInputMenu>
          {children}
        </DropdownInputMenu>
      }

    </div>
  )
}

export default DropdownInput
