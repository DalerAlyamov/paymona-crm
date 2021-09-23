import axios from 'axios'

const API = axios.create({
  baseURL: `http://`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default API