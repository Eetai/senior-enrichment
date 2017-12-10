'use strict'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { fetchStudents, fetchPlanets } from './store'
import App from "./components/App"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


render(
  <Provider store={store} >
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('main')
)