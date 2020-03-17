import React from 'react'
import { StatusBar } from 'react-native'

import MainNavigation from './router/MainNavigation'
import { white } from './utils/colors'

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={white} />
      <MainNavigation />
    </>
  )
}
