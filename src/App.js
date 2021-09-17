import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { LoginPage } from './organisms'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './redux/actions/userActions'
import { Wrap } from './molecules'
import { routerGoBack, routerGoForward, routerPush, routerReplace } from './redux/actions/routerActions'
import { Button } from './atoms'

const App = () => {

  const [value, setValue] = useState('')

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const logout_timer = 1800000 // 30 min

  const router = useSelector(state => state.router)

  useEffect(() => {
    let timer

    const timerFunc = () => {
      timer = window.setTimeout(() => {
        if (user.status === 'logined') {
          dispatch(login({ ...user, status: 'logouting' }))
          window.setTimeout(() => {
            if (user.status === 'logouting')
              dispatch(logout())
          }, 1200)
        }
      }, logout_timer)
    }

    if (user.status === 'logined')
      timerFunc()

    window.addEventListener('click', () => {
      clearTimeout(timer)
      timerFunc()
    })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('click', () => {
        clearTimeout(timer)
        timerFunc()
      })
    }
  }, [user, dispatch])

  useEffect(() => {

    const handleWindowBeforeunload = () => {
      if(user.status === 'logining' || user.status === 'logouting') 
        dispatch(logout())
    }

    window.addEventListener('beforeunload', handleWindowBeforeunload)

    return () => window.removeEventListener('beforeunload', handleWindowBeforeunload)
  }, [user, dispatch])

  return (
    <>
      <LoginPage />
      <div className={classNames('App', user.status === 'logouted' && 'App--close')}>
        
        <Wrap flex alignCenter column>
          <h4>Route Story</h4>
          <span>{router.routeStory.join(', ')}</span>
          <h4>Prev route</h4>
          <span>{String(router.prevRoute)}</span>
          <h4>Current route</h4>
          <span>{String(router.currentRoute)}</span>
          <h4>Next route</h4>
          <span>{String(router.nextRoute)}</span>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} />
          <Button onClick={() => dispatch(routerPush(value))}>
            Добавить
          </Button>
          <Button onClick={() => dispatch(routerReplace(value))}>
            Заменить
          </Button>
          <Button onClick={() => dispatch(routerGoBack())}>
            Назад
          </Button>
          <Button onClick={() => dispatch(routerGoForward())}>
            Вперёд
          </Button>
        </Wrap>

      </div>
    </>
  )
}

export default App
