import axios from 'axios'

const URL = 'https://supero-book-api.herokuapp.com/'

const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 10000,
  headers: { 'Access-Control-Allow-Origin': '*' },
})

export default axiosInstance
