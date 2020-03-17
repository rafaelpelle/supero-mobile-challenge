import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { lightGrey } from '../utils/colors'
import { routes } from './routes'
import HeaderImage from '../components/HeaderImage'

const Stack = createStackNavigator()

const screenOptions = {
  headerTitle: (props) => <HeaderImage {...props} />,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: lightGrey,
  },
}

export default function MainNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Books' screenOptions={screenOptions}>
        {routes.map((route, index) => (
          <Stack.Screen key={index} name={route.name} component={route.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
