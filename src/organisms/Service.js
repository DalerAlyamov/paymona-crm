import React, { useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/Service.module.scss'
import ServiceLabel from '../molecules/ServiceLabel'

const Service = ({
  className='',
  title='',
  clientList=[]
}) => {

  const [open, setOpen] = useState()

  return (
    <div className={classNames(className, styles.root)}>
      
      <ServiceLabel open={open} onClick={() => setOpen(!open)}>
        {title}
      </ServiceLabel>

    </div>
  )
}

export default Service
