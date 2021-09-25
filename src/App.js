import React from 'react'
import { LoginPage, Popup, SideBar } from './organisms'
import { useSelector } from 'react-redux'
import { Employees, Services, Feedbacks, Clients, Client, ClientPayment } from './routes'
import { Route } from 'react-router-dom'
import styles from './scss/App.module.scss'
 
const App = () => {

  const user = useSelector(state => state.user)

  return (
    <>
      <Popup />
      {user.status !== 'logined' && 
        <LoginPage />
      }
      {user.status !== 'logouted' &&
        <div className={styles.root}>
          <SideBar />
          <Route path='/employees' component={Employees} />
          <Route path='/services' component={Services} />
          <Route path='/feedbacks' component={Feedbacks} />
          <Route exact path='/clients/payment/:id' component={ClientPayment} />
          <Route exact path='/clients/:id' component={Client} />
          <Route exact path='/clients' component={Clients} />
        </div>
      }
    </>
  )
}

export default App
