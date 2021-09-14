import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/reducers' 
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './sass/root.scss'

ReactDOM.render(
  <Router basename='/'>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)