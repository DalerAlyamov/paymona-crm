import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from '../scss/molecules/DropDownInput.module.scss'

const DropdownInput = ({
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

  return (
    <div className={classNames(className, styles.root)}>
      
      .{}

    </div>
  )
}

export default DropdownInput
