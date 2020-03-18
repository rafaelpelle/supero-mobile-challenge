import { StyleSheet } from 'react-native'
import { darkGrey, disabledGrey } from '../../utils/colors'

export const styles = StyleSheet.create({
  modalBackdrop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1400,
    backgroundColor: '#000000BB',
    width: '100%',
    height: '100%',
  },
  modalContent: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '95%',
    paddingVertical: 30,
    borderRadius: 10,
    zIndex: 1500,
  },
  closeButton: {
    color: darkGrey,
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
  infoContainer: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  infoLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: disabledGrey,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: darkGrey,
  },
})
