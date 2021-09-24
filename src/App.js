import React from 'react'
import { LoginPage, Popup, SideBar } from './organisms'
import { useSelector } from 'react-redux'
import { Employees, Services, Feedbacks, Clients, Client } from './routes'
import { Route } from 'react-router-dom'
import styles from './scss/App.module.scss'
 
const App = () => {

  const user = useSelector(state => state.user)

  return (
    <>
      <Popup />
      <LoginPage />
      {user.status !== 'logouted' &&
        <div className={styles.root}>
          <SideBar />
          <Route path='/employees' component={Employees} />
          <Route path='/services' component={Services} />
          <Route path='/feedbacks' component={Feedbacks} />
          <Route path='/client/:id' component={Client} />
          <Route path='/clients' component={Clients} />
        </div>
      }
    </>
  )
}

export default App
