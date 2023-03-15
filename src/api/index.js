import axios from 'axios'

const BASE_URL = 'http://localhost:9999/'
export const smackAxios = axios.create({
  baseURL: BASE_URL,
})
