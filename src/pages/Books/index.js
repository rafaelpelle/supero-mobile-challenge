import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

import Filters from '../../components/Filters'
import BookList from '../../components/BookList'
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

  const onSubmit = async (values) => {
    clearState()
    const { searchTerm, initialDate, endDate } = values
    await loadBooks(0, searchTerm, initialDate, endDate)
  }

  return (
    <View style={styles.container}>
      <Filters onSubmit={onSubmit} />
      <BookList isLoading={isLoading} totalItems={totalItems} bookData={bookData} />
    </View>
  )
}
