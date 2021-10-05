import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/reducers' 
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import './scss/global.scss'
import * as Sentry from "@sentry/react"
import { Integrations } from "@sentry/tracing"

Sentry.init({
  dsn: "https://7e783cdb661c48d68810d2f86d3053e3@o990719.ingest.sentry.io/5978679",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
})

ReactDOM.render(
  <MemoryRouter initialEntries={['/employees']}>
    <Provider store={store}>
      <App />
    </Provider>
  </MemoryRouter>,
  document.getElementById('root')
)