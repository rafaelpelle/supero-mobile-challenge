import React from 'react'
import { Text, FlatList } from 'react-native'
import { useDispatch } from 'react-redux'

import Loader from '../../components/Loader'
import BookListItem from '../../components/BookListItem'
import { openBookModal } from '../../duck/bookReducer'
import { styles } from './styles'

export default function BookList({ isLoading, totalItems, bookData }) {
  const dispatch = useDispatch()

  const handleBookPress = (bookItem) => {
    dispatch(openBookModal(bookItem))
  }

  return (
    <>
      <Text style={styles.totalItems}>
        {isLoading ? 'Carregando livros...' : `${totalItems} livros encontrados`}
      </Text>
      <FlatList
        style={styles.list}
        data={bookData}
        keyExtractor={(book) => book.id}
        renderItem={({ item }) => (
          <BookListItem bookData={item} handleBookPress={handleBookPress} />
        )}
        ListFooterComponent={isLoading && <Loader />}
        // onEndReached={handleEndReached}
        // onEndReachedThreshold={0.1}
        // onRefresh={handleRefresh}
        // refreshing={isRefreshing}
      />
    </>
  )
}
