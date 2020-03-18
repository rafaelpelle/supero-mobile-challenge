import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { StatusBar } from 'react-native'

import reducers from './duck'
import { white } from './utils/colors'
import MainNavigation from './router/MainNavigation'

const composeEnhancers = composeWithDevTools({})
const composedWithMiddleware = composeEnhancers()
const store = createStore(reducers, composedWithMiddleware)

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle='dark-content' backgroundColor={white} />
      <MainNavigation />
    </Provider>
  )
}
