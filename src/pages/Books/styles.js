import { StyleSheet } from 'react-native'
import { lightGrey, white, darkGrey } from '../../utils/colors'

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lightGrey,
  },
  totalItems: {
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 15,
  },
  list: {
    width: '100%',
  },
})
