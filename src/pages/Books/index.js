import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TextInput, Button } from 'react-native'

import Filters from '../../components/Filters'
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

  const clearState = () => {
    setTotalItems(0)
    setTotalPages(0)
    setCurrentPage(0)
    setBookData([])
  }

  const loadBooks = async (page = currentPage, searchTerm = '', initialDate = '', endDate = '') => {
    if (totalPages && page > totalPages) return
    setIsLoading(true)
    try {
      const { data } = await getBooks(page, searchTerm, initialDate, endDate)
      setBookData(data.books)
      setTotalItems(data.totalBooks)
      setTotalPages(Math.floor(data.totalBooks / itemsPerPage))
    } catch (e) {
      console.error(e)
    }
    setIsLoading(false)
  }

  const handleBookPress = () => {}

  const onSubmit = async (values) => {
    clearState()
    const { searchTerm, initialDate, endDate } = values
    await loadBooks(0, searchTerm, initialDate, endDate)
  }

  return (
    <View style={styles.container}>
      <Filters onSubmit={onSubmit} />

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
    </View>
  )
}
