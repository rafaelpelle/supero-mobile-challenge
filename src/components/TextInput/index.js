import React from 'react'
import { TextInput, Text, View } from 'react-native'

import { styles } from './styles'

export default function Input({
  onChangeText,
  onBlur,
  value,
  error,
  touched,
  label,
  style,
  placeholder,
  isDateInput,
}) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={isDateInput ? 'numeric' : null}
        style={{ ...styles.input, ...style }}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}
