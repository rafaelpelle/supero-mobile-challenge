import React from 'react'
import { View, Text } from 'react-native'

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
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>
      <Text style={styles.isbn}>{isbn}</Text>
      <View style={styles.authorContainer}>
        <View>
          <Text style={styles.secondaryText}>Autor:</Text>
          <Text style={styles.mainText}>{author}</Text>
        </View>
        <View>
          <Text style={styles.secondaryText}>Editora:</Text>
          <Text style={styles.mainText}>{publisher}</Text>
        </View>
      </View>
    </View>
  )
}
