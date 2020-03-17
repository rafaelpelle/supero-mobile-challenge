import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'

import Loader from '../../components/Loader'
import BookListItem from '../../components/BookListItem'
import { styles } from './styles'
import { getBooks } from '../../services/bookService'

const itemsPerPage = 10

export default function Books(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [totalItems, setTotalItems] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [bookData, setBookData] = useState([])

  useEffect(() => {
    loadBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const loadBooks = async () => {
    if (totalPages && currentPage > totalPages) return
    setIsLoading(true)
    try {
      const { data } = await getBooks(currentPage)
      setBookData(data.books)
      setTotalItems(data.totalBooks)
      setTotalPages(Math.floor(data.totalBooks / itemsPerPage))
    } catch (e) {
      console.error(e)
    }
    setIsLoading(false)
  }

  const handleBookPress = () => {}

  return (
    <View style={styles.container}>
      <Text style={styles.totalItems}>{`${totalItems} livros encontrados`}</Text>
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
    </View>
  )
}
