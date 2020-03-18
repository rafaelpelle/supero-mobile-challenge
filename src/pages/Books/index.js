import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

import Filters from '../../components/Filters'
import BookList from '../../components/BookList'
import BookModal from '../../components/BookModal'
import { styles } from './styles'
import { getBooks } from '../../services/bookService'

const itemsPerPage = 10

export default function Books(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [totalItems, setTotalItems] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [bookData, setBookData] = useState([])
  const [currentFilters, setCurrentFilters] = useState(null)

  useEffect(() => {
    loadBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clearState = () => {
    setTotalItems(0)
    setTotalPages(0)
    setCurrentPage(0)
    setBookData([])
    setCurrentFilters(null)
  }

  const loadBooks = async (page = currentPage, searchTerm = '', initialDate = '', endDate = '') => {
    if (totalPages && page > totalPages) return
    if (initialDate && !endDate) endDate = new Date().getFullYear()
    if (!initialDate && endDate) initialDate = 1500
    setIsLoading(true)
    try {
      const { data } = await getBooks(page, searchTerm, initialDate, endDate)
      setBookData([...bookData, ...data.books])
      setTotalItems(data.totalBooks)
      setTotalPages(Math.floor(data.totalBooks / itemsPerPage))
    } catch (e) {
      console.error(e)
    }
    setIsLoading(false)
  }

  const handleEndReached = async () => {
    if (!isLoading) {
      const newPage = currentPage + 1
      setCurrentPage(newPage)
      if (currentFilters) {
        const { searchTerm, initialDate, endDate } = currentFilters
        await loadBooks(newPage, searchTerm, initialDate, endDate)
      } else {
        await loadBooks(newPage)
      }
    }
  }

  const onSubmit = async (values) => {
    clearState()
    const { searchTerm, initialDate, endDate } = values
    setCurrentFilters({ searchTerm, initialDate, endDate })
    await loadBooks(0, searchTerm, initialDate, endDate)
  }

  return (
    <View style={styles.container}>
      <BookList
        ListHeaderComponent={() => (
          <Filters onSubmit={onSubmit} isLoading={isLoading} totalItems={totalItems} />
        )}
        isLoading={isLoading}
        totalItems={totalItems}
        bookData={bookData}
        handleEndReached={handleEndReached}
      />
      <BookModal />
    </View>
  )
}
