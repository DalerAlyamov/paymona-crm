import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/LoginRightSide.module.scss'
import { ColoredLogo } from '../atoms'
import { LoginPanel } from './'

const LoginRightSide = ({
  className='',
  status='close'
}) => {

  const [logoSize, setLogoSize] = useState(window.innerHeight / 6.46)
  const [logoPadding, setLogoPadding] = useState(window.innerHeight / 19.38)

  useEffect(() => {

    const handleWindowResize = () => {
      setLogoSize(window.innerHeight / 6.46)
      setLogoPadding(window.innerHeight / 19.38)
    }
    
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)

  }, [])

  return (
    <div 
      className={classNames(
        className, 
        styles.root,
        styles[status] 
      )}
    >

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
