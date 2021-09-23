import React from 'react'
import classNames from 'classnames'
import styles from '../scss/atoms/ErrorText.module.scss'
import { Info } from '../icons' 

const ErrorText = ({
  className='',
  children=''
}) => {

  return (
    <span className={classNames(className, styles.root)}>
      <div className={styles.icon}>
        <Info size={16} />
      </div>
      {children}
    </span>
  )
}

export default ErrorText
