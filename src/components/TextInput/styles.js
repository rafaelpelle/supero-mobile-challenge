import { StyleSheet } from 'react-native'
import { white, disabledGrey } from '../../utils/colors'

export const styles = StyleSheet.create({
  inputGroup: {
    marginVertical: 10,
  },
  input: {
    width: '100%',
    backgroundColor: white,
    borderColor: disabledGrey,
    borderRadius: 3,
    borderWidth: 1,
    paddingVertical: 5,
  },
  label: {},
  error: {
    color: 'red',
  },
})
