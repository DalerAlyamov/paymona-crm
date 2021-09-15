import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/LoginRightSide.module.scss'
import { ColoredLogo } from '../atoms'
import { LoginPanel } from './'

const LoginRightSide = ({
  className='',
  status='close'
}) => {

  const [logoSize, setLogoSize] = useState(window.innerWidth / 12.8)
  const [logoPadding, setLogoPadding] = useState(window.innerWidth / 38.4)

  useEffect(() => {

    const handleWindowResize = () => {
      setLogoSize(window.innerWidth / 12.8)
      setLogoPadding(window.innerWidth / 38.4)
    }
    
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)

  }, [])

  return (
    <div className={classNames(className, styles.root)}>

      <ColoredLogo 
        hasWhiteBackground 
        isCircle 
        size={logoSize}
        padding={logoPadding}
        className={styles.logo}
      />

      <LoginPanel title='Вход' />

    </div>
  )
}

export default LoginRightSide
