import React from 'react'
import { StatusBar } from 'react-native'

import MainNavigation from './router/MainNavigation'
import { lightGrey } from './utils/colors'

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={lightGrey} />
      <MainNavigation />
    </>
  )
}
