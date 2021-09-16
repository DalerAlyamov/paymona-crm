import React from 'react'
import { LoginPage } from './organisms'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

const App = () => {

  const user = useSelector(state => state.user)

  return (
    <>
      <LoginPage />
      <div className={classNames('App', user.status === 'logouted' && 'App--close')}>
        
      </div>
    </>
  )
}

export default App
