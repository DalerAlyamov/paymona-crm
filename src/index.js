import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/reducers' 
import { Provider } from 'react-redux'
import './scss/global.scss'
import { MemoryRouter  } from 'react-router-dom'

ReactDOM.render(
  <MemoryRouter initialEntries={['/employees']}>
    <Provider store={store}>
      <App />
    </Provider>
  </MemoryRouter>,
  document.getElementById('root')
)