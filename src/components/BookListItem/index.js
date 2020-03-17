import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

import { styles } from './styles'

export default function BookListItem({ bookData, handleBookPress }) {
  const {
    id,
    title,
    isbn,
    author,
    publisher,
    year,
    language,
    weight,
    height,
    width,
    length,
  } = bookData

  return (
    <TouchableWithoutFeedback onLongPress={() => handleBookPress(bookData)}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.isbn}>{'ISBN: ' + isbn}</Text>
        <View style={styles.authorContainer}>
          <View>
            <Text style={styles.secondaryText}>Autor:</Text>
            <Text style={styles.mainText}>{author}</Text>
          </View>
          <View>
            <Text style={styles.secondaryText}>Editora:</Text>
            <Text style={styles.mainText}>{publisher}</Text>
          </View>
          <View>
            <Text style={styles.secondaryText}>Ano:</Text>
            <Text style={styles.mainText}>{year}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
