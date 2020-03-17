import { StyleSheet } from 'react-native'
import { white, black, darkGrey, disabledGrey, orange } from '../../utils/colors'

export const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: white,
    elevation: 5,
    shadowColor: black,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  authorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    color: darkGrey,
    fontSize: 16,
    fontWeight: 'bold',
  },
  isbn: {
    color: disabledGrey,
  },
  mainText: {
    color: darkGrey,
    fontSize: 15,
  },
  secondaryText: {
    color: disabledGrey,
    fontSize: 14,
  },
  year: {
    backgroundColor: orange,
    color: white,
    fontWeight: 'bold',
    padding: 4,
    borderRadius: 3,
  },
})
