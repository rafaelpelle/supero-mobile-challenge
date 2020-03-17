import React from 'react'
import { ActivityIndicator } from 'react-native'

import { styles } from './styles'
import { darkGrey } from '../../utils/colors'

export default function Loader() {
  return <ActivityIndicator style={styles.loader} color={darkGrey} />
}
