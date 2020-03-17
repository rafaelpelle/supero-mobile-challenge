import axiosClient from './axiosClient'

export const getBooks = (page, searchTerm = '', initialDate = '', endDate = '') =>
  axiosClient.get(
    `/books?page=${page}&searchTerm=${searchTerm}&initialDate=${initialDate}&endDate=${endDate}`,
  )
