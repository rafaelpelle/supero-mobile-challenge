import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

export default function ModalInfo({ label, value, suffix }) {
  const finalValue = value && suffix ? `${value}${suffix}` : value ? value : ''

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{finalValue}</Text>
    </View>
  )
}
