import React from 'react'
import { FlatList } from 'react-native'
import { useDispatch } from 'react-redux'

import Loader from '../../components/Loader'
import BookListItem from '../../components/BookListItem'
import { openBookModal } from '../../duck/bookReducer'
import { styles } from './styles'

export default function BookList({ isLoading, bookData, handleEndReached, ListHeaderComponent }) {
  const dispatch = useDispatch()

  const handleBookPress = (bookItem) => {
    dispatch(openBookModal(bookItem))
  }

  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      style={styles.list}
      data={bookData}
      keyExtractor={(book) => book.id}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.1}
      renderItem={({ item }) => <BookListItem bookData={item} handleBookPress={handleBookPress} />}
      ListFooterComponent={isLoading && <Loader />}
    />
  )
}
