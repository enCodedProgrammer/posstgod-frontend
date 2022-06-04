import './config/ReactotronConfig'
import Routes from './routes'
import React from 'react'
import {persistStore} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import history from './services/history'
import GlobalStyle from './styles/global'
import { store } from './store'

function App() {
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
      <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router history={history}>
            <GlobalStyle />
            <Routes />
            <ToastContainer autoClose={3000} />
          </Router>
        </MuiPickersUtilsProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
