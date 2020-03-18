import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import ModalInfo from './ModalInfo'
import { closeBookModal } from '../../duck/bookReducer'
import { darkGrey } from '../../utils/colors'
import { styles } from './styles'

export default function BookModal(props) {
  const dispatch = useDispatch()
  const { selectedBook } = useSelector((state) => state.bookReducer)
  const { title, isbn, author, publisher, year, language, weight, height, width, length } =
    selectedBook || {}

  const handleCloseModal = () => {
    dispatch(closeBookModal())
  }

  return (
    <Modal
      visible={!!selectedBook}
      onRequestClose={handleCloseModal}
      animationType='fade'
      transparent
    >
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContent}>
          <TouchableWithoutFeedback onPress={handleCloseModal}>
            <Icon style={styles.closeButton} name='close' size={30} color={darkGrey} />
          </TouchableWithoutFeedback>
          <ModalInfo label='Título:' value={title} />
          <ModalInfo label='ISBN:' value={isbn} />
          <ModalInfo label='Autor:' value={author} />
          <ModalInfo label='Editora:' value={publisher} />
          <ModalInfo label='Ano:' value={year} />
          <ModalInfo label='Idioma:' value={language} />
          <ModalInfo label='Peso:' value={weight} suffix='g' />
          <ModalInfo label='Altura:' value={height} suffix='cm' />
          <ModalInfo label='Largura:' value={width} suffix='cm' />
          <ModalInfo label='Comprimento:' value={length} suffix='cm' />
        </View>
      </View>
    </Modal>
  )
}
